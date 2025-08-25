import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFile = join(process.cwd(), 'data', 'products.json')

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    const body = await readBody(event)
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID is required'
      })
    }

    // Validate required fields
    if (!body.name || !body.description || !body.categoryId || !body.price || !body.image) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Read existing products
    const products = JSON.parse(readFileSync(dataFile, 'utf-8'))
    
    // Find and update the product
    const productIndex = products.findIndex(p => p.id === id)
    if (productIndex === -1) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found'
      })
    }

    // Update the product
    products[productIndex] = {
      ...products[productIndex],
      name: body.name,
      description: body.description,
      price: parseFloat(body.price),
      image: body.image,
      category: body.category || 'Unknown',
      categoryId: body.categoryId,
      features: body.features || [],
      gallery: body.gallery || [],
      targetGender: body.targetGender || 'all',
      inStock: body.inStock !== undefined ? body.inStock : true,
      updatedAt: new Date().toISOString()
    }
    
    // Write back to file
    writeFileSync(dataFile, JSON.stringify(products, null, 2))

    return products[productIndex]
  } catch (error) {
    console.error('Error updating product:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to update product'
    })
  }
})

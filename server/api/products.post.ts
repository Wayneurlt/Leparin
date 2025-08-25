import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFile = join(process.cwd(), 'data', 'products.json')

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    
    // Validate required fields
    if (!body.name || !body.description || !body.categoryId || !body.price || !body.image) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields'
      })
    }

    // Read existing products
    const products = JSON.parse(readFileSync(dataFile, 'utf-8'))
    
    // Create new product
    const newProduct = {
      id: `prod${Date.now()}`,
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
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    // Add to products array
    products.push(newProduct)
    
    // Write back to file
    writeFileSync(dataFile, JSON.stringify(products, null, 2))

    return newProduct
  } catch (error) {
    console.error('Error creating product:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to create product'
    })
  }
})

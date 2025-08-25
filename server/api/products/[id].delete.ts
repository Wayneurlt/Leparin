import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFile = join(process.cwd(), 'data', 'products.json')

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product ID is required'
      })
    }

    // Read existing products
    const products = JSON.parse(readFileSync(dataFile, 'utf-8'))
    
    // Find the product
    const productIndex = products.findIndex(p => p.id === id)
    if (productIndex === -1) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found'
      })
    }

    // Soft delete by setting isActive to false
    products[productIndex].isActive = false
    products[productIndex].updatedAt = new Date().toISOString()
    
    // Write back to file
    writeFileSync(dataFile, JSON.stringify(products, null, 2))

    return { success: true, message: 'Product deleted successfully' }
  } catch (error) {
    console.error('Error deleting product:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to delete product'
    })
  }
})

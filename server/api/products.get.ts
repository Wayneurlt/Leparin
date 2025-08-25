import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFile = join(process.cwd(), 'data', 'products.json')

// Ensure data directory exists
import { mkdirSync, existsSync } from 'fs'
const dataDir = join(process.cwd(), 'data')
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true })
}

// Initialize with sample data if file doesn't exist
if (!existsSync(dataFile)) {
  const sampleData = [
    {
      id: 'prod1',
      name: "Sensual Rose Vibrator",
      description: "Whisper-quiet luxury vibrator with 10 intensity levels for personalized pleasure.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww",
      category: "Vibrators",
      categoryId: 'cat1',
      features: ["10 intensity levels", "Whisper-quiet", "Waterproof", "USB rechargeable"],
      gallery: ["https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww"],
      targetGender: "women",
      inStock: true,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'prod2',
      name: "Couples' Bondage Set",
      description: "Premium silk restraints and blindfold for sensual exploration between partners.",
      price: 129.99,
      image: "https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg",
      category: "Bondage",
      categoryId: 'cat5',
      features: ["Silk material", "Adjustable straps", "Blindfold included", "Safe for beginners"],
      gallery: ["https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg"],
      targetGender: "couples",
      inStock: true,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'prod3',
      name: "Male Masturbator",
      description: "Realistic male masturbator with textured interior for enhanced pleasure.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      category: "Men's Toys",
      categoryId: 'cat3',
      features: ["Textured interior", "Easy to clean", "Discreet design", "Body-safe material"],
      gallery: ["https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"],
      targetGender: "men",
      inStock: true,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
  writeFileSync(dataFile, JSON.stringify(sampleData, null, 2))
}

export default defineEventHandler(async (event) => {
  try {
    const products = JSON.parse(readFileSync(dataFile, 'utf-8'))
    return products.filter(product => product.isActive !== false)
  } catch (error) {
    console.error('Error fetching products:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch products'
    })
  }
})

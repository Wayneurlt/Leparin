import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const dataFile = join(process.cwd(), 'data', 'categories.json')

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
      id: 'cat1',
      name: "Vibrators",
      description: "Electric pleasure devices for women",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "women",
      sortOrder: 1,
      productCount: 1,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'cat2',
      name: "Dildos",
      description: "Non-electric pleasure devices",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "women",
      sortOrder: 2,
      productCount: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'cat3',
      name: "Men's Toys",
      description: "Pleasure devices designed for men",
      image: "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "men",
      sortOrder: 3,
      productCount: 1,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'cat4',
      name: "Couples Toys",
      description: "Devices designed for couples",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "couples",
      sortOrder: 4,
      productCount: 0,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: 'cat5',
      name: "Bondage",
      description: "Restraints and BDSM equipment",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "couples",
      sortOrder: 5,
      productCount: 1,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ]
  writeFileSync(dataFile, JSON.stringify(sampleData, null, 2))
}

export default defineEventHandler(async (event) => {
  try {
    const categories = JSON.parse(readFileSync(dataFile, 'utf-8'))
    return categories.filter(category => category.isActive !== false)
  } catch (error) {
    console.error('Error fetching categories:', error)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch categories'
    })
  }
})

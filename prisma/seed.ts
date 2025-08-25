import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.product.deleteMany()
  await prisma.category.deleteMany()
  await prisma.order.deleteMany()
  await prisma.admin.deleteMany()

  // Create categories
  const categories = await Promise.all([
    prisma.category.create({
      data: {
        name: "Vibrators",
        description: "Electric pleasure devices for women",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "women",
        sortOrder: 1
      }
    }),
    prisma.category.create({
      data: {
        name: "Dildos",
        description: "Non-electric pleasure devices",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "women",
        sortOrder: 2
      }
    }),
    prisma.category.create({
      data: {
        name: "Men's Toys",
        description: "Pleasure devices designed for men",
        image: "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "men",
        sortOrder: 3
      }
    }),
    prisma.category.create({
      data: {
        name: "Couples Toys",
        description: "Devices designed for couples",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "couples",
        sortOrder: 4
      }
    }),
    prisma.category.create({
      data: {
        name: "Bondage",
        description: "Restraints and BDSM equipment",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "couples",
        sortOrder: 5
      }
    }),
    prisma.category.create({
      data: {
        name: "Lingerie",
        description: "Sensual clothing and accessories",
        image: "https://images.unsplash.com/photo-1568441556126-f36ae0900180?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        targetGender: "women",
        sortOrder: 6
      }
    }),
    prisma.category.create({
      data: {
        name: "Lubricants",
        description: "Personal lubricants and oils",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
        targetGender: "all",
        sortOrder: 7
      }
    })
  ])

  // Create products for each category
  const products = [
    // Vibrators
    {
      name: "Sensual Rose Vibrator",
      description: "Whisper-quiet luxury vibrator with 10 intensity levels for personalized pleasure.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww",
      categoryId: categories[0].id,
      features: JSON.stringify(["10 intensity levels", "Whisper-quiet", "Waterproof", "USB rechargeable"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww"]),
      targetGender: "women"
    },
    {
      name: "Dual Stimulation Massager",
      description: "Simultaneous G-spot and clitoral stimulation with ergonomic design.",
      price: 109.99,
      image: "https://plus.unsplash.com/premium_photo-1700600265464-8c218020528d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoryId: categories[0].id,
      features: JSON.stringify(["Dual motors", "Ergonomic design", "Waterproof", "Multiple patterns"]),
      gallery: JSON.stringify(["https://plus.unsplash.com/premium_photo-1700600265464-8c218020528d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]),
      targetGender: "women"
    },
    {
      name: "Rabbit Vibrator",
      description: "Classic rabbit design with rotating shaft and clitoral stimulator.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[0].id,
      features: JSON.stringify(["Rotating shaft", "Clitoral stimulator", "7 vibration modes", "Silicone material"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "women"
    },

    // Dildos
    {
      name: "Realistic Silicone Dildo",
      description: "Body-safe silicone dildo with realistic texture and suction cup base.",
      price: 49.99,
      image: "https://plus.unsplash.com/premium_photo-1700600258977-0321b0f8dc5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoryId: categories[1].id,
      features: JSON.stringify(["Body-safe silicone", "Suction cup base", "Realistic texture", "Harness compatible"]),
      gallery: JSON.stringify(["https://plus.unsplash.com/premium_photo-1700600258977-0321b0f8dc5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]),
      targetGender: "women"
    },
    {
      name: "Glass Dildo",
      description: "Elegant glass dildo with temperature play capabilities.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[1].id,
      features: JSON.stringify(["Temperature play", "Smooth surface", "Elegant design", "Easy to clean"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "women"
    },

    // Men's Toys
    {
      name: "Male Masturbator",
      description: "Realistic male masturbator with textured interior for enhanced pleasure.",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[2].id,
      features: JSON.stringify(["Textured interior", "Easy to clean", "Discreet design", "Body-safe material"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "men"
    },
    {
      name: "Prostate Massager",
      description: "Ergonomic prostate massager for male pleasure and wellness.",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[2].id,
      features: JSON.stringify(["Ergonomic design", "Prostate targeting", "Silicone material", "Easy insertion"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "men"
    },

    // Couples Toys
    {
      name: "Couples Ring",
      description: "Pleasure ring for couples to enhance intimacy and prolong pleasure.",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[3].id,
      features: JSON.stringify(["Adjustable size", "Silicone material", "Easy to use", "Enhances pleasure"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "couples"
    },
    {
      name: "Remote Control Vibrator",
      description: "Discreet remote control vibrator for couples play.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[3].id,
      features: JSON.stringify(["Remote control", "Discreet design", "Multiple speeds", "Waterproof"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "couples"
    },

    // Bondage
    {
      name: "Couples' Bondage Set",
      description: "Premium silk restraints and blindfold for sensual exploration between partners.",
      price: 129.99,
      image: "https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg",
      categoryId: categories[4].id,
      features: JSON.stringify(["Silk material", "Adjustable straps", "Blindfold included", "Safe for beginners"]),
      gallery: JSON.stringify(["https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg"]),
      targetGender: "couples"
    },
    {
      name: "Leather Cuffs Set",
      description: "Premium leather cuffs with D-rings for secure restraint play.",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[4].id,
      features: JSON.stringify(["Premium leather", "D-rings", "Adjustable", "Padded interior"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "couples"
    },

    // Lingerie
    {
      name: "Silk Lingerie Set",
      description: "Elegant silk lingerie set for sensual moments.",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1568441556126-f36ae0900180?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      categoryId: categories[5].id,
      features: JSON.stringify(["Silk material", "Adjustable straps", "Matching set", "Elegant design"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1568441556126-f36ae0900180?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]),
      targetGender: "women"
    },
    {
      name: "Lace Bodysuit",
      description: "Sensual lace bodysuit for intimate moments.",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[5].id,
      features: JSON.stringify(["Lace material", "Snap crotch", "Adjustable straps", "Sensual design"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "women"
    },

    // Lubricants
    {
      name: "Water-Based Lube",
      description: "Smooth water-based lubricant for enhanced pleasure.",
      price: 19.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[6].id,
      features: JSON.stringify(["Water-based", "Silicone safe", "Long-lasting", "Easy to clean"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "all"
    },
    {
      name: "Silicone Lube",
      description: "Long-lasting silicone lubricant for intense pleasure.",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      categoryId: categories[6].id,
      features: JSON.stringify(["Silicone-based", "Long-lasting", "Waterproof", "Intense pleasure"]),
      gallery: JSON.stringify(["https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"]),
      targetGender: "all"
    }
  ]

  // Create all products
  await Promise.all(
    products.map(product => prisma.product.create({ data: product }))
  )

  // Create sample orders
  const sampleOrders = [
    {
      customerName: "John Doe",
      customerPhone: "+254 702 943 693",
      customerEmail: "john@example.com",
      items: JSON.stringify([
        { name: "Sensual Rose Vibrator", quantity: 1, price: 89.99 },
        { name: "Water-Based Lube", quantity: 2, price: 19.99 }
      ]),
      total: 129.97,
      status: "pending",
      shippingAddress: "Nairobi, Kenya",
      paymentMethod: "WhatsApp"
    },
    {
      customerName: "Jane Smith",
      customerPhone: "+254 712 345 678",
      customerEmail: "jane@example.com",
      items: JSON.stringify([
        { name: "Couples' Bondage Set", quantity: 1, price: 129.99 }
      ]),
      total: 129.99,
      status: "confirmed",
      shippingAddress: "Mombasa, Kenya",
      paymentMethod: "WhatsApp"
    },
    {
      customerName: "Mike Johnson",
      customerPhone: "+254 733 456 789",
      customerEmail: "mike@example.com",
      items: JSON.stringify([
        { name: "Male Masturbator", quantity: 1, price: 39.99 },
        { name: "Silicone Lube", quantity: 1, price: 24.99 }
      ]),
      total: 64.98,
      status: "shipped",
      shippingAddress: "Kisumu, Kenya",
      paymentMethod: "WhatsApp"
    }
  ]

  await Promise.all(
    sampleOrders.map(order => prisma.order.create({ data: order }))
  )

  // Create admin user
  await prisma.admin.create({
    data: {
      email: "admin@fantasyworld.com",
      password: "admin123", // In production, this should be hashed
      name: "FantasyWorld Admin",
      isActive: true
    }
  })

  console.log('Database seeded successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

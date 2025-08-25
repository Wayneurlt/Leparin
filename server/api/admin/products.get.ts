export default defineEventHandler(async (event) => {
  // In a real application, you would fetch from database
  // For now, return sample data
  return [
    {
      id: 1,
      name: "Sensual Rose Vibrator",
      description: "Whisper-quiet luxury vibrator with 10 intensity levels for personalized pleasure.",
      price: 89.99,
      category: "Vibrators",
      image: "https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww",
      features: ["10 intensity levels", "Whisper-quiet", "Waterproof", "USB rechargeable"],
      gallery: [
        "https://images.unsplash.com/photo-1721993728580-06bdb5db9a16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZSUyMHZpYnJhdG9yfGVufDB8fDB8fHww"
      ],
      createdAt: "2024-01-15T10:30:00Z",
      updatedAt: "2024-01-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Couples' Bondage Set",
      description: "Premium silk restraints and blindfold for sensual exploration between partners.",
      price: 129.99,
      category: "Bondage",
      image: "https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg",
      features: ["Silk material", "Adjustable straps", "Blindfold included", "Safe for beginners"],
      gallery: [
        "https://eroskenya.com/storage/2020/05/bdsm-3-510x510.jpg"
      ],
      createdAt: "2024-01-10T14:20:00Z",
      updatedAt: "2024-01-10T14:20:00Z"
    },
    {
      id: 3,
      name: "Dual Stimulation Massager",
      description: "Simultaneous G-spot and clitoral stimulation with ergonomic design.",
      price: 109.99,
      category: "Vibrators",
      image: "https://plus.unsplash.com/premium_photo-1700600265464-8c218020528d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: ["Dual motors", "Ergonomic design", "Waterproof", "Multiple patterns"],
      gallery: [
        "https://plus.unsplash.com/premium_photo-1700600265464-8c218020528d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ],
      createdAt: "2024-01-12T09:15:00Z",
      updatedAt: "2024-01-12T09:15:00Z"
    }
  ];
});

export default defineEventHandler(async (event) => {
  // In a real application, you would fetch from database
  // For now, return sample data
  return [
    {
      id: 1,
      name: "Vibrators",
      description: "Electric pleasure devices for women",
      image: "https://plus.unsplash.com/premium_photo-1700601156496-55d95edf68fe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      targetGender: "women",
      sortOrder: 1,
      productCount: 15,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-15T10:30:00Z"
    },
    {
      id: 2,
      name: "Bondage",
      description: "Restraints and BDSM equipment",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "couples",
      sortOrder: 2,
      productCount: 8,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-10T14:20:00Z"
    },
    {
      id: 3,
      name: "Dildos",
      description: "Non-electric pleasure devices",
      image: "https://plus.unsplash.com/premium_photo-1700600258977-0321b0f8dc5f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      targetGender: "women",
      sortOrder: 3,
      productCount: 12,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-12T09:15:00Z"
    },
    {
      id: 4,
      name: "Men's Toys",
      description: "Pleasure devices designed for men",
      image: "https://images.unsplash.com/photo-1616486334851-f8b8742f1b1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      targetGender: "men",
      sortOrder: 4,
      productCount: 10,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-08T16:45:00Z"
    },
    {
      id: 5,
      name: "Lingerie",
      description: "Sensual clothing and accessories",
      image: "https://images.unsplash.com/photo-1568441556126-f36ae0900180?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      targetGender: "women",
      sortOrder: 5,
      productCount: 20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-14T11:20:00Z"
    }
  ];
});

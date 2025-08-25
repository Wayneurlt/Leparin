export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Validate required fields
  if (!body.name || !body.description || !body.category || !body.price || !body.image) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }

  // In a real application, you would save to database
  // For now, return the created product with a new ID
  const newProduct = {
    id: Date.now(), // Simple ID generation
    name: body.name,
    description: body.description,
    category: body.category,
    price: parseFloat(body.price),
    image: body.image,
    features: body.features || [],
    gallery: body.gallery || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return newProduct;
});

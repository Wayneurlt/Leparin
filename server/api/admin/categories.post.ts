export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  
  // Validate required fields
  if (!body.name || !body.description || !body.image) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields'
    });
  }

  // In a real application, you would save to database
  // For now, return the created category with a new ID
  const newCategory = {
    id: Date.now(), // Simple ID generation
    name: body.name,
    description: body.description,
    image: body.image,
    targetGender: body.targetGender || '',
    sortOrder: parseInt(body.sortOrder) || 0,
    productCount: 0,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  return newCategory;
});

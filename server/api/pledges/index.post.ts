import prisma from "../../utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    // Validate required fields
    if (!body.text || typeof body.text !== "string" || !body.text.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: "Pledge text is required",
      });
    }

    // Create the pledge
    const pledge = await prisma.pledge.create({
      data: {
        name: body.name && typeof body.name === "string" ? body.name.trim() : null,
        text: body.text.trim(),
      },
    });

    return {
      success: true,
      data: pledge,
      message: "Pledge created successfully",
    };
  } catch (error: any) {
    console.error("Error creating pledge:", error);
    
    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to create pledge",
    });
  }
});

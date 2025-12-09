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
    console.error("Error details:", {
      message: error.message,
      code: error.code,
      meta: error.meta,
      stack: error.stack,
    });
    
    if (error.statusCode) {
      throw error;
    }

    throw createError({
      statusCode: 500,
      statusMessage: error.message || "Failed to create pledge",
      data: {
        code: error.code,
        details: error.meta,
      },
    });
  }
});

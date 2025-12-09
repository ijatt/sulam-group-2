import prisma from "../../utils/prisma";

export default defineEventHandler(async (event) => {
  try {
    const pledges = await prisma.pledge.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 10, // Get latest 10 pledges
      select: {
        id: true,
        name: true,
        text: true,
        createdAt: true,
      },
    });

    return {
      success: true,
      data: pledges,
    };
  } catch (error) {
    console.error("Error fetching pledges:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch pledges",
    });
  }
});

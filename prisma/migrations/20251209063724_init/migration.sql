-- CreateTable
CREATE TABLE "Pledge" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "text" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pledge_pkey" PRIMARY KEY ("id")
);

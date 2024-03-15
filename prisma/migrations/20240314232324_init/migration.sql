-- CreateTable
CREATE TABLE "Poll" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "topics" TEXT NOT NULL,
    "votes" JSONB NOT NULL,
    "options" JSONB NOT NULL,
    "markdown" TEXT NOT NULL,
    "thumbnail" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Poll_pkey" PRIMARY KEY ("id")
);

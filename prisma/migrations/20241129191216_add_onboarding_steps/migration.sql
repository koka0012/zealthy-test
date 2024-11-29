-- CreateEnum
CREATE TYPE "OnboardingComponent" AS ENUM ('ABOUT_ME', 'ADDRESS', 'BIRTH_DATE');

-- CreateTable
CREATE TABLE "OnboardingSteps" (
    "id" TEXT NOT NULL,
    "step" TEXT NOT NULL,
    "component" "OnboardingComponent" NOT NULL,

    CONSTRAINT "OnboardingSteps_pkey" PRIMARY KEY ("id")
);

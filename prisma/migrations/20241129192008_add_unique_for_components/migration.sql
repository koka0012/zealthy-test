/*
  Warnings:

  - A unique constraint covering the columns `[component]` on the table `OnboardingSteps` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "OnboardingSteps_component_key" ON "OnboardingSteps"("component");

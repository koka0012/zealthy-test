import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})
async function main() {
  await prisma.onboardingSteps.createMany({
    data: [
      { component: 'ABOUT_ME', step: '1' },
      { component: 'BIRTH_DATE', step: '1' },
      { component: 'ADDRESS', step: '2' },
    ],
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

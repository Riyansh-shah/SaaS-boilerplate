require("dotenv/config");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({});

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "admin@saasstarter.dev" },
    update: {},
    create: {
      email: "admin@saasstarter.dev",
      name: "Admin User",
      role: "ADMIN",
    },
  });

  await prisma.subscription.upsert({
    where: { id: "test-subscription" },
    update: {},
    create: {
      id: "test-subscription",
      userId: admin.id,
      provider: "manual",
      status: "active",
      plan: "pro",
    },
  });

  console.log("✅ Seed completed");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

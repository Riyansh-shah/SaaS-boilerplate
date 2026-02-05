import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient({});

async function main() {
  // Hash password for admin
  const hashedPassword = await bcrypt.hash("admin123", 10);

  // Create admin user for ABC.gym
  const admin = await prisma.user.upsert({
    where: { email: "admin@abcgym.com" },
    update: {},
    create: {
      email: "admin@abcgym.com",
      name: "ABC Gym Admin",
      password: hashedPassword,
      role: "ADMIN",
    },
  });

  console.log("✅ Seed completed");
  console.log("Admin user:", admin.email);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

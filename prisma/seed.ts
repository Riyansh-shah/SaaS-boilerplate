import "dotenv/config";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({});

async function main() {
  // 1️⃣ Create admin user
  const admin = await prisma.user.upsert({
    where: { email: "admin@cctrial.com" },
    update: {},
    create: {
      email: "admin@cctrial.com",
      name: "CC Admin",
      role: "ADMIN",
    },
  });

  // 2️⃣ Create Categories
  const categories = [
    { name: "New Born", slug: "new-born", description: "Gifts for the littlest ones" },
    { name: "Toddlers", slug: "toddlers", description: "Safe and fun toys for toddlers" },
    { name: "Kids", slug: "kids", description: "Personalized gifts for children" },
    { name: "Teenager", slug: "teenager", description: "Cool and unique gifts for teens" },
    { name: "School & Stationery", slug: "school-stationery", description: "Custom school supplies" },
    { name: "Furniture", slug: "furniture", description: "Custom kids furniture" },
    { name: "Room Décor", slug: "room-decor", description: "Personalized room decorations" },
    { name: "DIY Kits", slug: "diy", description: "Creative do-it-yourself art kits" },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }

  console.log("✅ Seed completed");
  console.log("Admin user:", admin.email);
  console.log("Categories created:", categories.length);
}

main()
  .catch((e) => {
    console.error("❌ Seed failed", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

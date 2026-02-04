import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const category = searchParams.get("category");
        const search = searchParams.get("search");

        const products = await prisma.product.findMany({
            where: {
                AND: [
                    category ? { category: { slug: category } } : {},
                    search ? {
                        OR: [
                            { name: { contains: search, mode: "insensitive" } },
                            { description: { contains: search, mode: "insensitive" } },
                        ]
                    } : {},
                ],
            },
            include: {
                category: true,
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const product = await prisma.product.create({
            data: {
                name: data.name,
                slug: data.slug || data.name.toLowerCase().replace(/\s+/g, "-"),
                description: data.description,
                specifications: data.specifications,
                images: data.images || [],
                categoryId: data.categoryId,
                price: data.price ? parseFloat(data.price) : null,
                featured: data.featured || false,
            },
        });

        return NextResponse.json({ success: true, product });
    } catch (error) {
        console.error("Product Error:", error);
        return NextResponse.json(
            { error: "Failed to create product" },
            { status: 500 }
        );
    }
}

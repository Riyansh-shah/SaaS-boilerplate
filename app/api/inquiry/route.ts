import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email and message are required" },
                { status: 400 }
            );
        }

        const inquiry = await prisma.inquiry.create({
            data: {
                name,
                email,
                phone,
                message: subject ? `Subject: ${subject}\n\n${message}` : message,
                source: "contact",
            },
        });

        return NextResponse.json({ success: true, inquiry }, { status: 201 });
    } catch (error) {
        console.error("Inquiry Error:", error);
        return NextResponse.json(
            { error: "Failed to submit inquiry" },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        const inquiries = await prisma.inquiry.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });

        return NextResponse.json(inquiries);
    } catch (error) {
        return NextResponse.json(
            { error: "Failed to fetch inquiries" },
            { status: 500 }
        );
    }
}

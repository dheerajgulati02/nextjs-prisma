import { NextResponse } from "next/server";
import prisma from '../../../lib/prisma'

export async function POST(req) {
    const res = await req.json();
    const { title, content } = res;
    console.log(res);
    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: true,
            author: {
                create: {
                    name: 'ryan'
                }
            }
        }
    })
    return NextResponse.json({ result })
}
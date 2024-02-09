import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma";
export async function DELETE(req, { params }) {
    const id = params.id;
    const post = await prisma.post.delete({
        where: {
            id: id,
        }
    })
    return NextResponse.json(post);
}
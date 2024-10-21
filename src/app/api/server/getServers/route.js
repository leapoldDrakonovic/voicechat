import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function GET(req) {
    if(req.method != "GET") return
    
    try {
        const servers = await prisma.Server.findMany()
        
        if (!servers) {
            return NextResponse.json([], { status: 200 });
        }

        return NextResponse.json(servers, {status: 200})

    } catch (error) {
        return NextResponse.json(error, {status: 500})
    }
}
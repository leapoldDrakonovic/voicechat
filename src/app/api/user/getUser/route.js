import { cookies } from "next/headers";
import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server";

export async function GET() {


    try {
        const userId = parseInt(cookies().get("session").value)
    
        const user = await prisma.User.findUnique({
            where: {id: userId}
        })
    
        if (!user) {
			return NextResponse.json( {message: "User doesnt exist"} , { status: 500 });
            
        }
    
			return NextResponse.json( user , { status: 200 });
        
    
    } catch (error) {
			return NextResponse.json( error , { status: 500 });
        
    }



}
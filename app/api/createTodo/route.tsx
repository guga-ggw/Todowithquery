import  Prisma  from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req : any){
    try {
        console.log('here')
        const {title} = await req.json()

        const createTodo = await Prisma.todo.create({
            data : {
                title
            }
        })

        return NextResponse.json({message : 'created'})
    } catch (error) {
        return NextResponse.json({message : 'error'})
    }
}
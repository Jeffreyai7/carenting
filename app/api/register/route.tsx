import { NextRequest, NextResponse } from "next/server";
import { regSchema } from "../schema";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
try {
const body = await request.json();

const validation = regSchema.safeParse(body);

if(!validation.success)
    return  NextResponse.json(validation.error.errors, {status: 400})

const user = await prisma.user.findUnique({
    where: {
        email: body.email
    }
})

    // checking if user exists

if(user) return NextResponse.json({error: "user already exist"}, {status: 404})

    // hashing user pasword

    const hashedPassword = await bcrypt.hash(body.password, 10)
// creating new user
    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword
        }
    })

    
} catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    ); 
}

}

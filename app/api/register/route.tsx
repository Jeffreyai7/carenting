import { NextRequest, NextResponse } from "next/server";
import { regSchema } from "../schema";


export async function POST(request: NextRequest) {
const body = await request.json();

const validation = regSchema.safeParse(body);

if(!validation.success)
    return  NextResponse.json(validation.error.errors, {status: 400})

}
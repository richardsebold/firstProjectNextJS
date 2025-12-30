import { NextResponse } from "next/server";

export async function GET() {
    return Response.json({
        name: "Richard",
        idade: 20,
        instagram: "@sebold.dll"
    })
}
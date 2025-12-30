import { NextRequest, NextResponse } from "next/server"

export function proxy(request: NextRequest) {
    console.log("Middleware executed")
    
    const authenticated = true

    if(request.nextUrl.pathname.startsWith("/dashboard") && !authenticated) {
        return NextResponse.redirect(new URL("/", request.url))
    }

    return NextResponse.next()

}
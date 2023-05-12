import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    let body = await request.json();
    console.log(body)

    let res = await fetch("https://simple-books-api.glitch.me/api-clients/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });

    let data = await res.json();

    return NextResponse.json(data);
}

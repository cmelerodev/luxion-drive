import { db } from "@/lib/db"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const data = await req.json();

        const car = await db.car.create({
            data: {
              ...data,
            },
          });

        return NextResponse.json(car)
        
    } catch (error) {
        console.log("[CAR]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ carId: string }> }
) {
    
    try {
        const {carId} = await params;
        const values = await req.json()

        const car = await db.car.update({
            where: {
                id: carId,
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(car)
    } catch (error) {
        console.log("[CAR FORM ID]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function GET(
    req: Request,
    {params}: {params: Promise<{carId: string}>}
) {

    try {
        const {carId} = await params;

        const getCar = await db.car.findUnique({
            where: {
                id: carId,
            },
        });

        return NextResponse.json(getCar)
    } catch (error) {
        console.log("[DELETE CAR ID]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
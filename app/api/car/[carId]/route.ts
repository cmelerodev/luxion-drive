import { db } from "@/lib/db"
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    {params}: {params: Promise<{carId: string}>}
) {

    try {
        const {carId} = await params;

        const deletedCar = await db.car.delete({
            where: {
                id: carId,
            },
        });

        return NextResponse.json(deletedCar)
    } catch (error) {
        console.log("[DELETE CAR ID]", error)
        return new NextResponse("Internal Error", {status: 500})
    }
}
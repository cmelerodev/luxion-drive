import { ButtonAddCar } from "./components/ButtonAddCar"
import { ListCars } from "./components/ListCars"
import { db } from "@/lib/db"

export default async function DashboardPage() {

    const car = await db.car.findMany();

    return (
        
        <div>
            <div className="max-w-7xl mx-auto pt-12 lg:pt-24 px-6">
                <div className="flex justify-end">
                    <ButtonAddCar />
                </div>
            </div>
            
            <ListCars cars={car}/>
        </div>
    )
}
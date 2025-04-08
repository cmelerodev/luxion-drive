import { ButtonAddCar } from "./components/ButtonAddCar"
import { ListCars } from "./components/ListCars"
import { db } from "@/lib/db"

export default async function DashboardPage() {

    const car = await db.car.findMany();

    return (
        
        <div>
            <div className="flex justify-between">
                <h2>Manage your cars</h2>
                <ButtonAddCar />
            </div>
            <ListCars cars={car}/>
        </div>
    )
}
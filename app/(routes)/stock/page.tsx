import { FilterAndListCars } from "./components/FilterAndListCars";
import { db } from "@/lib/db"

export default async function StockPage() {
    const car = await db.car.findMany();
    
    return (
        <FilterAndListCars cars={car}/>
    )
}
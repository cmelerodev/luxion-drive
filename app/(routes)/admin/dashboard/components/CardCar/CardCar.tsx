"use client"

import { Button } from "../../../../../../components/ui/button";
import { toast } from "sonner"
import { Gauge, Trash, Users, FuelIcon, Calendar, Car } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { CardCarProps } from "./CardCar.type";
import { ButtonEditCar } from "./ButtonEditCar";
import axios from "axios";
import { Badge } from "@/components/ui/badge";

export function CardCard(props: CardCarProps) {
    const { car } = props;

    const router = useRouter()

    const deletedCard = async() => {
        try {
            await axios.delete(`/api/car/${car.id}`);
            toast.error("Car deleted")
            router.refresh()
        } catch (error) {
            console.error("Error deleting car:", error);
            toast.error("Something went wrong")
        }
    }

    return (
        <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
            <a  href={`/car-info/${car.id}`}>
            <Image src={car.photo} alt={car.model} width={400} height={600}
             className="rounded-lg"/>

             <div className="relative p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                    <div className="flex justify-between items-center">
                        <p className="text-xl min-h-16 lg:min-h-fit">{car.model}</p>
                        <Badge className="bg-gradient-to-tr from-slate-900 to-gray-600 font-bold">
                            {Number(car.price).toLocaleString('es-ES')} €
                        </Badge>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-x-4">
                    <p className="flex items-center">
                        <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.plazas}
                    </p>
                    <p className="flex items-center">
                        <FuelIcon className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.fuel_type}
                    </p>
                    <p className="flex items-center">
                        <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.cv}
                    </p>
                    <p className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" strokeWidth={1} />
                        {car.year}
                    </p>
                    <p className="flex items-center">
                        <Car className="h-4 w-4 mr-2" strokeWidth={1} />
                        <span>{car.km} km</span>
                    </p>
                </div>
             </div>
             </a>
             <div className="flex flex-col md:flex-row justify-between mt-3 gap-y-2 gap-x-4 p-3">
                <Button variant="outline" onClick={deletedCard}>
                    Delete
                    <Trash className="w-4 h-4 ml-2" />
                </Button>

                <ButtonEditCar carData={car}/>
            </div>
        </div>
    )
}
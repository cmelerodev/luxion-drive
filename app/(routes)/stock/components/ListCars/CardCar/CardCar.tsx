"use client"

import { Gauge, Users, FuelIcon, Calendar, Car, Heart } from "lucide-react";
import Image from "next/image";
import { CardCarProps } from "./CardCar.type";
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Badge } from "@/components/ui/badge";

export function CardCard(props: CardCarProps) {
    const { car } = props;
    const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();

    const likedCar = lovedItems.some((item) => item.id === car.id)

    return (
        <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex justify-center">
                <Image src={car.photo} alt={car.model} width={250} height={600} className="rounded-lg"/>
            </div>

             <div className="relative p-3">
                <div className="flex flex-col mb-3 gap-x-4">
                    <div className="flex justify-between items-center">
                        <p className="text-xl">{car.model}</p>
                        <Badge className="bg-gradient-to-tr from-slate-900 to-gray-600 font-bold">
                            {Number(car.price).toLocaleString('es-ES')} €
                        </Badge>
                    </div>
                    <p className="text-sm text-slate-500">{car.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
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

             <div className="absolute top-6 right-6">
                <Heart
                    className={`hover:scale-110 text-gray-500 ${likedCar && "text-red-500 fill-red-500"}`}
                    onClick={likedCar ? () => removeLovedItem(car.id) : () => addLovedItem(car)}
                    strokeWidth={1.5}
                />
            </div>
        </div>
    )
}
"use client"

import { useLovedCars } from "@/hooks/use-loved-cars"
import { Car } from "@prisma/client"
import { Calendar, CarFront, FuelIcon, Gauge, Heart, Users } from "lucide-react"
import Image from "next/image"
export function ListLovedCars () {
    const {lovedItems, removeLovedItem} =  useLovedCars()
    return <>
        {lovedItems.length === 0 ? (
            <div className="flex w-full justify-center items-center">
                <h2 className="">Lista de coches favoritos vacía</h2>
            </div>
        ): (
            <div className="grid md:grid-cols-2 gap-6 my-4 lg:grid-cols-3">
                {lovedItems.map((car: Car) => {
                    const {model, photo, fuel_type, km, year, cv, plazas, price, id, description} = car

                    return (
                        <div className="relative p-1 rounded-lg shadow-md hover:shadow-lg" key={id}>
                            <Image src={photo} alt={model} width={400} height={600} className="rounded-lg"/>
                            <div className="relative p-3">
                                <div className="flex flex-col mb-3 gap-x-4">
                                    <p className="text-xl min-h-16 lg:min-h-fit">{model}</p>
                                    <p className="text-sm text-slate-500">{description}</p>
                                </div>

                                <div className="my-3 gap-x-4">
                                    <p>{price}€</p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-x-4">
                                    <p className="flex items-center">
                                        <Users className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {plazas}
                                    </p>
                                    <p className="flex items-center">
                                        <FuelIcon className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {fuel_type}
                                    </p>
                                    <p className="flex items-center">
                                        <Gauge className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {cv}
                                    </p>
                                    <p className="flex items-center">
                                        <Calendar className="h-4 w-4 mr-2" strokeWidth={1} />
                                        {year}
                                    </p>
                                    <p className="flex items-center">
                                        <CarFront className="h-4 w-4 mr-2" strokeWidth={1} />
                                        <span>{km} km</span>
                                    </p>
                                </div>
                                <div className="absolute top-2 right-2">
                                    <Heart
                                        className="cursor-pointer fill-black"
                                        onClick={() => removeLovedItem(car.id)}
                                        strokeWidth={1}
                                    />
                                </div>
                            </div>
                            
                        </div>
                    );
                })}
            </div>
        )}
    </>
}
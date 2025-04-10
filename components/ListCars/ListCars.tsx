import Image from "next/image";
import { ListCarsProps } from "./ListCars.type";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Calendar, Car, FuelIcon, Gauge, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
  

export function ListCars(props: ListCarsProps) {
    const { cars } = props

    return (
        <div className="flex flex-col items-center lg:gap-y-8">
            <Carousel opts={{ align: "start", loop: true, }} className="w-full">
                <CarouselContent className="py-4">
                    {cars.map((car) => (
                        <CarouselItem key={car.id} className="md:basis-1/2 lg:basis-1/3">
                            <div className="relative p-1 bg-white rounded-lg shadow-md hover:shadow-lg">
                                <a  href={`/car-info/${car.id}`}>
                                    <div className="flex justify-center">
                                        <Image src={car.photo} alt={car.model} width={250} height={250} className="rounded-lg"/>
                                    </div>
                        
                                    <div className="relative p-3">
                                        <div className="flex flex-row items-center justify-between mb-3 gap-x-4">
                                            <p className="text-xl">{car.model}</p>
                                            <Badge className="bg-gradient-to-tr from-slate-900 to-gray-600 font-bold">
                                                {Number(car.price).toLocaleString('es-ES')} €
                                            </Badge>
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
                                </a>
                            </div>
                        </CarouselItem>
                        
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden xl:flex"/>
                <CarouselNext className="hidden xl:flex"/>
            </Carousel>

            <Link href="/stock">
                    <Button variant="outline" size="lg"><Car className="mr-2"/>Ver todos los coches</Button>
            </Link>
        </div>
    )
}
"use client"
import { Car } from "@prisma/client";
import { useEffect, useState } from "react";
import { FilterAndListCarsProps } from "./FilterAndListCars.type";
import { ListCars } from "../ListCars";
import { FiltersCars } from "../FiltersCars";

export function FilterAndListCars(props: FilterAndListCarsProps) {
    const { cars } = props; 

    const [filteredCars, setfilteredCars] = useState<Car[]>()
    const [filters, setFilters] = useState({
        brand: "",
        minPrice: "",
        maxPrice: "",
        minYear: "",
        maxYear: "",
        km: "",
        color: "",
        plazas: "",
        fuel_type: "",
    })

    useEffect(() => {
        let filtered = cars

        if(filters.brand) {
            filtered = filtered.filter((car) => car.brand.toLowerCase().includes(filters.brand.toLowerCase()))
        }

        if (filters.minPrice) {
            filtered = filtered.filter((car) => Number(car.price) >= Number(filters.minPrice));
        }
        
        if (filters.maxPrice) {
            filtered = filtered.filter((car) => Number(car.price) <= Number(filters.maxPrice));
        }

        if (filters.minYear) {
            filtered = filtered.filter((car) => Number(car.year) >= Number(filters.minYear));
        }
        
        if (filters.maxYear) {
            filtered = filtered.filter((car) => Number(car.year) <= Number(filters.maxYear));
        }

        if (filters.km) {
            if (filters.km === "200000") {
                filtered = filtered.filter((car) =>  Number(car.km) >= Number(filters.km));
            } else {
                filtered = filtered.filter((car) =>  Number(car.km) <= Number(filters.km));
            }
        }

        if(filters.color) {
            filtered = filtered.filter((car) => car.color.toLowerCase().includes(filters.color.toLowerCase()))
        }

        if(filters.plazas) {
            filtered = filtered.filter((car) => car.plazas.toLowerCase().includes(filters.plazas.toLowerCase()))
        }

        if(filters.fuel_type) {
            filtered = filtered.filter((car) => car.fuel_type.toLowerCase().includes(filters.fuel_type.toLowerCase()))
        }

        setfilteredCars(filtered)

    }, [filters, cars])

    const handleFilterChange = (filterName: string, filterValue: string) => {
        setFilters((prevFilters) => ({
            ...prevFilters,
            [filterName]: filterValue
        }))
    }

    const clearFilters = () => {
        setFilters({
            brand: "",
            minPrice: "",
            maxPrice: "",
            minYear: "",
            maxYear: "",
            km: "",
            color: "",
            plazas: "",
            fuel_type: "",
        })
    }

    return (
        <div>
            <FiltersCars setFilters={handleFilterChange} filters={filters} clearFilters={clearFilters}/>
            <div className="container mx-auto px-6 md:px-12">
            <ListCars cars={filteredCars}/>
            </div>
        </div>
    )
}
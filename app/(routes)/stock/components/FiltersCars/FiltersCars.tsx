import * as React from "react"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FilterCarsProps } from "./FiltersCars.type"
import { Button } from "@/components/ui/button"
import { Trash } from "lucide-react"
import { Input } from "@/components/ui/input"

export function FiltersCars(props: FilterCarsProps) {
    const {clearFilters, setFilters, filters} = props

    const handleFilter = (filter: string, value: string) => (
        setFilters(filter, value)
    )

    return (
        <div className="w-full flex justify-center px-6 lg:px-12 lg:sticky top-0 z-50 supports-[backdrop-filter]:bg-white/90 backdrop-blur-xl border-b">
            <div className="flex flex-wrap mt-5 mb-8 gap-x-4 gap-y-2 max-w-7xl">
                <Select onValueChange={(value) => handleFilter("brand", value)} value={filters.brand}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Marca"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                <SelectItem value="bmw">BWM</SelectItem>
                                <SelectItem value="audi">Audi</SelectItem>
                                <SelectItem value="porche">Porche</SelectItem>
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilter("km", value)} value={filters.km}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Kilometros"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                <SelectItem value="10000">&lt; 10000 km</SelectItem>
                                <SelectItem value="50000">&lt; 50000 km</SelectItem>
                                <SelectItem value="100000">&lt; 100000 km</SelectItem>
                                <SelectItem value="150000">&lt; 150000km </SelectItem>
                                <SelectItem value="200000">200000 km +</SelectItem>
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <Select onValueChange={(value) => handleFilter("color", value)} value={filters.color}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Color"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                <SelectItem value="red">Rojo</SelectItem>
                                <SelectItem value="blue">Azul</SelectItem>
                                <SelectItem value="white">Blanco</SelectItem>
                                <SelectItem value="black">Negro</SelectItem>
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilter("plazas", value)} value={filters.plazas}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Plazas"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                <SelectItem value="2">2</SelectItem>
                                <SelectItem value="4">4</SelectItem>
                                <SelectItem value="5">5</SelectItem>
                                <SelectItem value="7">7</SelectItem>
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilter("fuel_type", value)} value={filters.fuel_type}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Combustible"></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>
                                <SelectItem value="gasolina">Gasolina</SelectItem>
                                <SelectItem value="diesel">Diésel</SelectItem>
                            </SelectLabel>
                        </SelectGroup>
                    </SelectContent>
                </Select>


                <Input
                    className="w-full md:w-[180px]"
                    type="number"
                    placeholder="Min Año"
                    value={filters.minYear}
                    onChange={(e) => handleFilter("minYear", e.target.value)}
                />

                <Input
                    className="w-full md:w-[180px]"
                    type="number"
                    placeholder="Max año"
                    value={filters.maxYear}
                    onChange={(e) => handleFilter("maxYear", e.target.value)}
                />

                <Input
                    className="w-full md:w-[180px]"
                    type="number"
                    placeholder="Min Precio"
                    value={filters.minPrice}
                    onChange={(e) => handleFilter("minPrice", e.target.value)}
                />

                <Input
                    className="w-full md:w-[180px]"
                    type="number"
                    placeholder="Max Precio"
                    value={filters.maxPrice}
                    onChange={(e) => handleFilter("maxPrice", e.target.value)}
                />

                <Button variant="outline" onClick={clearFilters} className="w-full md:w-fit">
                    <Trash className="w-4 h-4" strokeWidth={1} />
                </Button>
            </div>
        </div>
    )
}
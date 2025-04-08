export type FilterCarsProps = {
    setFilters: (filterName: string, filterValue: string) => void
    clearFilters: () => void
    filters: {
        brand: string,
        minPrice: string,
        maxPrice: string,
        minYear: string,
        maxYear: string,
        km: string,
        color: string,
        plazas: string,
        fuel_type: string,
    }
}
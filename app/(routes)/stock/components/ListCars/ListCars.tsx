import { Section } from "@/components/Section";
import { CardCard } from "./CardCar";
import { ListCarsProps } from "./ListCars.type";

export function ListCars(props: ListCarsProps) {
    const { cars } = props;

    if (!cars || cars.length === 0) {
        return <div className="flex w-full justify-center mt-24"><p>No se ha encontrado ningún vehículo</p></div>
    }

    return (
    <>
        <Section>
            <div className="text-sm text-muted-foreground mb-6">Mostrando <strong>{cars.length}</strong> vehículos disponibles </div>
            <div className="grid md:grid-cols-2 gap-6 my-4 lg:grid-cols-3">
                {cars.map((car) => (
                    <CardCard car={car} key={car.id}/>
                ))}
            </div>
        </Section>
    </>
    )
}
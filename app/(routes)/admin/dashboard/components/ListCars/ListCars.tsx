
import { Section } from "@/components/Section";
import { CardCard } from "../CardCar";
import { ListCarsProps } from "./ListCars.type";

export function ListCars(props: ListCarsProps) {
    const { cars } = props;
    return (
        <Section>
        <div className="grid md:grid-cols-2 gap-6 my-4 lg:my-12 lg:grid-cols-3">
            {cars.map((car) => (
                <CardCard car={car} key={car.id}/>
            ))}
        </div>
        </Section>
    )
}
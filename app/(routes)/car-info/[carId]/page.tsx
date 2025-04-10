import { Section } from "@/components/Section"
import { Car } from "@prisma/client"
import Image from "next/image"
import { LikeButton } from "./components/LikeButton"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface CarInfoPageProps {
    params: Promise<{
        carId: string;
    }>;
}

export default async function PageCarInfo({ params }: CarInfoPageProps ) {

    const { carId } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/car-info/${carId}`)

    const car: Car = await res.json()

    const infoCar = [
        { label: "Marca", value: car.brand },
        { label: "Modelo", value: car.model },
        { label: "Año", value: car.year },
        { label: "Kilómetros", value: `${car.km} km` },
        { label: "Potencia", value: `${car.cv} cv` },
        { label: "Combustible", value: car.fuel_type },
        { label: "Puertas", value: car.puertas },
        { label: "Plazas", value: car.plazas },
    ];

    return (
        <div>
            <Section>
                <div className="flex flex-col lg:flex-row w-full gap-12 lg:gap-32">
                    <div className="lg:w-[60%]">
                        <div>
                            <Image src={car.photo} alt="" width={500} height={400} className="h-full w-full object-cover flex justify-center"/>
                        </div>
                    </div>
                    <div className="lg:w-[40%] flex flex-col gap-4 sticky top-20 mb-24 lg:mb-0">
                        <h2 className="text-4xl">{car.model}</h2>
                        <div className="flex items-center gap-6  border-b border-gray-200 pb-3 text-muted-foreground text-sm">
                            <p>{car.year}</p>
                            <p>{car.km} km</p>
                            <p className="">{car.fuel_type}</p>
                        </div>
                        <h3 className="text-4xl font-bold">{Number(car.price).toLocaleString('es-ES')} €</h3>
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <LikeButton car={car} />
                            <p>Añadir a favoritos</p>
                        </div>

                        <div className="bg-gray-200/40 rounded-lg p-6">
                            {infoCar.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-2 w-full capitalize">
                                    <p className="w-[50%] font-bold text-gray-800">{item.label}:</p>
                                    <p className="w-[50%]">{item.value}</p>
                                </div>
                            ))}
                        </div>

                        <Link href="/contact" className="">
                            <Button className="w-full">Contactar</Button>
                        </Link>
                        
                    </div>
                </div>

                <div>
                    <p>
                        {car.description.split('\n').map((item, index) => (
                            <span key={index}>
                                {item}
                                <br />
                            </span>
                        ))}
                    </p>
                </div>
            </Section>
        </div>
    )
}
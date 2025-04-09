import { CarImage } from "@/components/CarImage";
import { InfoCar } from "@/components/InfoCar";
import { Section } from "@/components/Section";
import { MapPin } from "lucide-react";

export default function ServicePage() {
    return (
        <div>
            <Section>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Servicios en Luxion Drive</h1>
                        <p className="mt-6 text-xl text-muted-foreground">Luxion Drive ofrece una amplia gama de servicios para garantizarte la mejor experiencia con tu vehículo de segunda mano.</p>
                    </div>
                </div>
                <div className="container mx-auto px-4 mt-8">
                    <div className="bg-muted/30 rounded-lg p-4 flex items-center max-w-2xl mx-auto">
                    <MapPin className="h-5 w-5 text-primary mr-2 flex-shrink-0"/>
                    <p className="text-sm text-muted-foreground">Todos nuestros servicios están disponibles en nuestro concesionario ubicado en <strong>Cádiz</strong>. Para más información, llámanos al 123 45 67 89.</p>
                    </div>
                </div>
            </Section>

            <Section>
                <CarImage />
            </Section>

            <Section>
                <div className="flex flex-wrap justify-center gap-6">
                    <InfoCar
                        title="FINANCIACIÓN"
                        text="Negociamos con los principales bancos las mejores condiciones para nuestros clientes, posibilidad de financiación hasta en 10 años con o sin entrada."
                        src="/servicio-1.webp"
                    />
                    <InfoCar
                        title="ENTREGA A DOMICILIO"
                        text="Le entregamos el coche en su domicilio personalmente o mediante agencia, usted elige."
                        src="/servicio-2.webp"
                    />
                    <InfoCar
                        title="GARANTÍA"
                        text="Todos nuestros vehículos cuentan con garantía, en muchos casos oficial de la marca."
                        src="/servicio-3.webp"
                    />
                    <InfoCar
                        title="VEHICULOS CERTIFICADOS"
                        text="Facilitamos la máxima información a nuestros clientes, todos nuestros vehículos disponen de historial completo de mantenimiento, certificado de kilometraje y no siniestralidad."
                        src="/servicio-4.webp"
                    />
                    <InfoCar
                        title="DETAILING"
                        text="Contamos con un experimentado equipo en detallado para dar el máximo cuidado a nuestros vehículos, hacemos corrección de pintura, tratamientos cerámicos, tratamientos de piel y plásticos interiores."
                        src="/servicio-5.webp"
                    />
                </div>
            </Section>
        </div>
    )
}
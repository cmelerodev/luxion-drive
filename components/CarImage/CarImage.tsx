import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import { Reveal } from "../Reveal";
import { Button } from "../ui/button";
import Link from "next/link";

export function CarImage() {
    return (
        <div>
            <div className="grid lg:grid-cols-2 items-center">
                <Reveal position="bottom">
                    <Image width={600} height={400} className="w-full h-auto rounded-2xl object-cover shadow-lg" src="/servicios.webp" alt="" />
                </Reveal>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Nuestros Servicios Exclusivos</h3>
                    <p className="mb-3 font-normal text-gray-700">En Luxion Drive, nos enorgullece ofrecer una amplia variedad de servicios diseñados para brindarte la mejor experiencia en la compra y cuidado de tu vehículo. Ya sea que estés buscando financiación, garantía o detalles específicos, tenemos opciones personalizadas para ti.</p>
                    <div className="bg-muted/90 rounded-xl p-6 border border-muted mb-3">
                        <h4 className="font-medium text-lg mb-4">Ventajas de nuestros servicios</h4>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                <span>Financiación flexible adaptada a tus necesidades.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                <span>Entrega a domicilio para tu comodidad.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                <span>Garantía completa para la tranquilidad de tu compra.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                <span>Vehículos certificados con historial completo.</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <CircleCheck className="w-4 h-4 text-green-500 flex-shrink-0"/>
                                <span>Servicio de detailing para mantener tu coche en su mejor estado.</span>
                            </li>
                        </ul>
                    </div>
                    <Link href="/stock" className="w-fit"><Button>Ver todos los coches <ArrowRight className="w-5 h-5 ml-2"/></Button></Link>
                </div>
            </div>
        </div>
    )
}
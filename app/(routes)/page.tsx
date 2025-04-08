import { FeaturedCard } from "@/components/FeaturedCard";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { FileText, SearchCheck, Smile } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid md:grid-cols-2 py-12 md:py-0 items-center">
        <Reveal position="bottom" className="flex flex-col px-12 lg:max-w-full">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold">Luxion Drive</h1>
          <p className="text-sm text-gray-500">En Luxion Drive te ofrecemos una cuidada selección de vehículos de alta gama, revisados al detalle y listos para hacerte vivir la experiencia del lujo al volante. Exclusividad, confianza y pasión por los coches en cada entrega.</p>
        </Reveal>
        <Reveal position="right" className="flex justify-end">
          <Image src="/porche-gt3-rs-v2.jpg" width={700} height={700} alt="porche-gt3-rs" priority/>
        </Reveal>
      </div>

      <div className="max-w-7xl py-24 mx-auto">
        <div className="w-full grid lg:grid-cols-3 gap-y-12 items-start ">
          <FeaturedCard icon={SearchCheck} title="Selección de producto" text="La mayor parte de nuestros vehículos proceden de concesionario oficial y son seleccionados por profesionales con muchos años de experiencia, antes de la entrega les realizamos una inspección en 100 puntos para ofrecer a nuestros clientes la máxima garantía y calidad." />
          <FeaturedCard icon={FileText} title="Certificado de estado" text="Facilitamos la máxima información a nuestros clientes, todos nuestros vehículos disponen de historial de mantenimiento, certificado de kilometraje y no siniestralidad." />
          <FeaturedCard icon={Smile} title="Satistacción del cliente" text="En Luxion Drive llevamos más de 10 años comprando y vendiendo coches de segunda mano. Nuestra experiencia es el aval que nos permite dar la mejor respuesta que busca cada cliente a sus necesidades." />
        </div>

        <div className="my-32 mx-2 lg:mx-0 bg-gradient-to-tr from-slate-900 to-gray-600 p-6 lg:py-32 lg:px-18 rounded-xl relative">
          <div className="flex flex-col gap-y-12 lg:flex-row gap-x-6">
            <div>
              <h3 className="text-4xl text-white">Compra el coche de tus sueños hoy</h3>
              <p className="text-white text-xl my-5">Explora el mundo de los coches premium</p>
              <a href="/stock">
                <Button variant="outline" size="lg">
                  Ver todos los coches
                </Button>
              </a>
            </div>
            <Reveal className="relative lg:absolute lg:-right-24 lg:top-1/2 lg:transform lg:-translate-y-1/2" position="bottom">
              <Image src="/lamborghini-urus.webp" alt="Car drive" width={550} height={250}/>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
}

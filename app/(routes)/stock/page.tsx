import { Section } from "@/components/Section";
import { FilterAndListCars } from "./components/FilterAndListCars";
import { db } from "@/lib/db"

export default async function StockPage() {
    const car = await db.car.findMany();
    
    return (
        <div>
            <FilterAndListCars cars={car}/>
            
            <Section>
                <div className="p-6 bg-gray-300/20 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Compra de coches de segunda mano en Luxion Drive</h3>
                    <p className="mb-3 text-muted-foreground">En <strong>Luxion Drive</strong>, tu destino exclusivo para coches de lujo en Cádiz, te ofrecemos una cuidada selección de vehículos de alta gama, tanto nuevos como de ocasión. Cada automóvil ha sido minuciosamente revisado para cumplir con los más altos estándares de calidad, rendimiento y elegancia. Descubre una experiencia de compra premium con atención personalizada y marcas de prestigio internacional.</p>
                    <p className="text-muted-foreground">Si estás buscando un coche de lujo de ocasión en Cádiz, te ofrecemos los mejores precios del mercado y financiación a medida. Todos nuestros vehículos incluyen garantía y la posibilidad de probarlos antes de tomar una decisión. ¡Ven a conocernos hoy mismo en nuestro concesionario en Cádiz y descubre el lujo que mereces!</p>
                </div>
            </Section>
        </div>
        
    )
}
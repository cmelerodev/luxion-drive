import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function ServicePage() {
    return (
        <div>
            <div className="flex flex-col items-center gap-6 max-w-3xl mx-auto text-center py-20">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Servicios en Luxion Drive</h2>
                <p className="text-xl text-muted-foreground">Luxion Drive ofrece una amplia gama de servicios para garantizarte la mejor experiencia con tu vehículo de segunda mano en El Puerto de Santa María.</p>
            </div>
            <div className="flex justify-center max-w-3xl mx-auto text-center">
                <div className="bg-muted/75 rounded-lg flex items-start py-2 px-4">
                    <MapPin />
                    <p className="text-sm text-muted-foreground">
                        Todos nuestros servicios están disponibles en nuestro concesionario ubicado en <strong>C. Barbecho, 17, El Puerto de Santa María</strong>. Para más información, llámanos al 123 45 67 89.
                    </p>
                </div>
            </div>
        </div>
    )
}
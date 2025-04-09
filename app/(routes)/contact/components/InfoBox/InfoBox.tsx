import { Clock, Mail, Phone } from "lucide-react";

export function InfoBox() {
    return (
        <div className="w-full lg:w-[30%] p-6 rounded-lg border-accent border shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Información de contacto</h2>
            <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4">
                    <Phone className="w-5 h-5" />
                    <div className="flex flex-col justify-start">
                        <h3 className="font-medium">Teléfono</h3>
                        <p className="text-muted-foreground">+34 123 45 67 89</p>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <Mail className="w-5 h-5" />
                    <div className="flex flex-col justify-start">
                        <h3 className="font-medium">Correo</h3>
                        <p className="text-muted-foreground">luxion.drive@gamil.com</p>
                    </div>
                </li>
                <li className="flex items-center gap-4">
                    <Clock className="w-5 h-5" />
                    <div className="flex flex-col justify-start">
                        <h3 className="font-medium">Horario</h3>
                        <p className="text-muted-foreground">Lunes - Sabado: 9:00 - 17:00</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}
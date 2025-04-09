import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

export function ContactForm() {
    return (
        <form className="w-full lg:w-[70%] flex flex-col gap-4 p-6 rounded-lg border-accent border shadow-lg">
            <h2 className="text-xl font-semibold mb-6">Contacta con nosotros</h2>
            <div className="flex items-center justify-between gap-8">
                <Input type="text" placeholder="Nombre" />
                <Input type="email" placeholder="Email *" required/>
            </div>
            <Input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Teléfono" />
            <Textarea placeholder="Mensaje *"className="h-30" required/>

            <Button>Enviar <Send className="w-5 h5 ml-2" strokeWidth={1} /></Button>
        </form>
    )
}
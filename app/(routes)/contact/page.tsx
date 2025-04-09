import { Section } from "@/components/Section";
import { ContactForm } from "./components/ContactForm";
import { InfoBox } from "./components/InfoBox";

export default function ContactPage() {
    return (
        <div>
            <Section>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-bold mb-4">Contacta con Luxion Drive </h1>
                    <p className="text-muted-foreground text-lg">Estamos aquí para ayudarte con cualquier duda sobre nuestros vehículos de ocasión o servicios. Visítanos en nuestro concesionario de <strong>Cádiz</strong> o contáctanos y te responderemos lo antes posible.</p>
                </div>
                <div className="flex flex-col-reverse lg:flex-row items-start gap-6 lg:gap-4">
                    <InfoBox />
                    <ContactForm />
                </div>
            </Section>
        </div>
    )
}
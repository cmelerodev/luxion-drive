import { Wrench, Car, Phone } from "lucide-react";

export const dataGeneralSidebar = [
    {
        icon: Car,
        label: "Stock",
        href: "/stock"
    },
    {
        icon: Wrench,
        label: "Servicios",
        href: "/services"
    },
    {
        icon: Phone,
        label: "Contactar",
        href: "/contact"
    }
]

export const dataAdminSidebar = [
    {
        icon: Car,
        label: "Manage cars",
        href: "/admin/dashboard"
    }
]
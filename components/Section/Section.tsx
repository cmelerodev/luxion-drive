import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    id?: string
}

export function Section({ children, id }: SectionProps) {
    return (
        <div id={id} className="max-w-7xl mx-auto py-12 lg:py-24 px-6">
            {children}
        </div>
    )
}
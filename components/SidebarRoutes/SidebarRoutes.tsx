"use client"

import { useAuth } from "@clerk/nextjs"
import { dataGeneralSidebar,  dataAdminSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";

export function SidebarRoutes({ className = "" }: { className?: string }) {
    const { userId } = useAuth();
    return (
        <div className={`hidden lg:flex h-full items-center gap-2 ${className}`}>
            { dataGeneralSidebar.map((item => (
                <SidebarItem key={item.label} item={item}/>
            )))}

            {isAdministrator(userId) && (
                dataAdminSidebar.map((item) => (
                    <SidebarItem key={item.label} item={item} />
                ))
            )}
            

        </div>
    )
}
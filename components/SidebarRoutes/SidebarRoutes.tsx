"use client"

import { useAuth } from "@clerk/nextjs"
import { dataGeneralSidebar,  dataAdminSidebar } from "./SidebarRoutes.data";
import { SidebarItem } from "./SidebarItem";
import { isAdministrator } from "@/lib/isAdministrator";
import { Heart } from "lucide-react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { useLovedCars } from "@/hooks/use-loved-cars";
import { Button } from "../ui/button";

export function SidebarRoutes({ className = "" }: { className?: string }) {
    const { userId } = useAuth();
    const { lovedItems } = useLovedCars()
    const { isSignedIn } = useAuth()
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

            <a href="/love-cars" className="flex lg:hidden gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-300/20 p-2 rounded-lg cursor-pointer">
                <Heart strokeWidth={1} className={`h-5 w-5 ${lovedItems.length > 0 && "text-red-500 fill-red-500"}`}/>
                Loved cars
            </a>

            <div className="flex lg:hidden items-center gap-4">
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <>
                        <Button variant="outline">
                            <SignInButton mode="modal" />
                        </Button>
                        <Button variant="outline">
                            <SignUpButton mode="modal" />
                        </Button>
                    </>
                )}
            </div>
            

        </div>
    )
}
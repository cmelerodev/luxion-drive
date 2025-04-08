"use client"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Heart, Menu } from "lucide-react"
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes"
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs"
import { useLovedCars } from "@/hooks/use-loved-cars"
import { Button } from "../ui/button"
  

export function NavbarDashboard()  {
    const { lovedItems } = useLovedCars()
    const { isSignedIn } = useAuth()

    return (
        <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
            <a href="/"><img className="w-[120px]" src="/logo-luxion-drive.png" alt="logo Luxion Drive"></img></a>
            
            <SidebarRoutes />
        
            <div className="flex items-center justify-end gap-x-4">
                <div className="block lg:hidden">
                    <Sheet>
                    <SheetTrigger className="flex items-center"><Menu /></SheetTrigger>
                    <SheetContent side="left">
                        <SidebarRoutes className="!flex !flex-col !justify-center"/>
                    </SheetContent>
                    </Sheet>
                </div>
                <a href="/love-cars"><Heart className={`h-5 w-5 ${lovedItems.length > 0 && "fill-black"}`} strokeWidth={1}/></a>
                <div className="flex items-center gap-4">
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
        </nav>
    )
}
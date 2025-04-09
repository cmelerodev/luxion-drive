"use client"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { Heart, Menu } from "lucide-react"
import { SidebarRoutes } from "../SidebarRoutes/SidebarRoutes"
import { SignInButton, SignUpButton, useAuth, UserButton } from "@clerk/nextjs"
import { useLovedCars } from "@/hooks/use-loved-cars"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
  

export function NavbarDashboard()  {
    const { lovedItems } = useLovedCars()
    const { isSignedIn } = useAuth()

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 transition-all duration-300 bg-background/95 backdrop-blur-md shadow-md">
            <Link href="/"><Image width={120} height={120} src="/luxion-drive-logo.webp" alt="logo Luxion Drive"></Image></Link>
            
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
                <Link href="/love-cars" className="hidden lg:block"><Heart className={`h-5 w-5 text-gray-500 ${lovedItems.length > 0 && "text-red-500 fill-red-500"}`} strokeWidth={1}/></Link>
                <div className="hidden lg:flex items-center gap-4">
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
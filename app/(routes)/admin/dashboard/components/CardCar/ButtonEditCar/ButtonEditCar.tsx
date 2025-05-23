"use client"
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from "@/components/ui/dialog";
import { ButtonEditCarProps } from "./ButtonEditCar.types";
import { Pencil } from "lucide-react";
import { useState } from "react";
import { FormEditCar } from "../FormEditCar";
export function ButtonEditCar(props: ButtonEditCarProps) {
    const {carData} = props;
    const [openDialog, setOpenDialog] = useState(false)
    return (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
            <DialogTrigger asChild>
                <Button variant="outline" onClick={() => setOpenDialog(true)}>
                    Edit
                    <Pencil className="w-4 h-4 ml-2" strokeWidth={1}/>
                </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                    <DialogDescription>
                        <FormEditCar setOpenDialog={setOpenDialog} carData={carData} />
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
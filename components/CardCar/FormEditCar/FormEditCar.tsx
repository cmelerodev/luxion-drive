"use client"

import { toast } from "sonner"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import axios from "axios"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormEditCar.form"
import { UploadButton } from "@/utils/uploadthing"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { FormEditCarProps } from "./FormEditCar.types";



export function FormEditCar(props: FormEditCarProps) {
    const {carData, setOpenDialog} = props;

    const [photoUploaded, setPhotoUploaded] = useState(false)

    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            model: carData.model,
            brand: carData.brand,
            year: carData.year,
            price: carData.price,
            km: carData.km,
            fuel_type: carData.fuel_type,
            cv: carData.cv,
            description: carData.description,
            photo: carData.photo,
            color: carData.color,
            puertas: carData.puertas,
            plazas: carData.plazas,
        },
    })

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        setOpenDialog(false)

        try {
            await axios.patch(`/api/car/${carData.id}/form`, values);
            toast("Car edited")
            router.refresh();
        } catch (error) {
            console.error("Error editing car:", error);
            toast.error("Something went wrong")
        }
    }

    const { isValid } = form.formState;

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="photo"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Photo</FormLabel>
                        <FormControl>
                        {photoUploaded ? (<p className="text-sm">Image uploaded</p>) : (
                            <UploadButton className="rounded-lg bg-slate-600/20 text-slate-800 outline-dotted outline-3"
                            {...field}
                            endpoint="photo"
                            onClientUploadComplete={(res) => {
                                form.setValue("photo", res?.[0].url)
                                setPhotoUploaded(true)
                            }}
                            onUploadError={(error: Error) => {
                                console.log(error)
                            }}
                            />
                        )}
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <div className="grid gap-6 lg:grid-cols-2">
                    <FormField
                        control={form.control}
                        name="model"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Modelo</FormLabel>
                            <FormControl>
                            <Input placeholder="Serie 3 320d" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="brand"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Marca</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="bmw">BMW</SelectItem>
                                    <SelectItem value="mercedes">Mercedes</SelectItem>
                                    <SelectItem value="audi">Audi</SelectItem>
                                    <SelectItem value="porche">Porche</SelectItem>
                                    <SelectItem value="lamborghini">Lamborghini</SelectItem>
                                    <SelectItem value="nissan">Nissan</SelectItem>
                                    <SelectItem value="ford">Ford</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Year</FormLabel>
                            <FormControl>
                            <Input placeholder="2018" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Price</FormLabel>
                            <FormControl>
                            <Input placeholder="18500 €" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="km"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Kilometers</FormLabel>
                            <FormControl>
                            <Input placeholder="105000 Km" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="fuel_type"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Fuel Type</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="diesel">Diesel</SelectItem>
                                    <SelectItem value="gasolina">Gasolina</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="cv"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Powerhorse</FormLabel>
                            <FormControl>
                            <Input placeholder="190 CV" type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                            <Input placeholder="Car description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    
                    <FormField
                        control={form.control}
                        name="color"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Color</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="red">Red</SelectItem>
                                    <SelectItem value="blue">Blue</SelectItem>
                                    <SelectItem value="white">White</SelectItem>
                                    <SelectItem value="black">Black</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="puertas"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Puertas</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="plazas"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Plazas</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Fuel Type" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="2">2</SelectItem>
                                    <SelectItem value="4">4</SelectItem>
                                    <SelectItem value="5">5</SelectItem>
                                    <SelectItem value="7">7</SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                        )}
                    />
                    
                    

                </div>
            <Button className="w-full mt-5" type="submit" disabled={!isValid}>Edit car</Button>
            </form>
        </Form>
    )
}
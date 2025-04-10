"use client"

import { useLovedCars } from "@/hooks/use-loved-cars";
import { LikeButtonProps } from "./LikeButton.type";
import { Heart } from "lucide-react";

export function LikeButton(props: LikeButtonProps) {

    const { car } = props;

        const { addLovedItem, lovedItems, removeLovedItem } = useLovedCars();
        
        const likedCar = lovedItems.some((item) => item.id === car.id)
    
    return (
        <Heart
            className={`hover:scale-110 text-gray-500 ${likedCar && "text-red-500 fill-red-500"}`}
            onClick={likedCar ? () => removeLovedItem(car.id) : () => addLovedItem(car)}
            strokeWidth={1.5}
        />
    )
}
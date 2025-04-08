import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {toast} from 'sonner'
import {Car} from '@prisma/client'

interface UseLovedCarsType {
    lovedItems: Car [];
    addLovedItem: (data: Car) => void,
    removeLovedItem: (id: String) => void,
}

export const useLovedCars = create (
    persist<UseLovedCarsType>(
        (set, get) => ({
            lovedItems: [],
            addLovedItem: (data: Car) => {
                const currenLovedItems = get().lovedItems;
                const existingItem = currenLovedItems.find((item) => item.id === data.id)

            if (existingItem) {
                return (
                    toast("El coche ya existe en la lista")
                )
            }

            set ({
                lovedItems: [...get().lovedItems,data]
            })

            toast("Coche añadido a la lista")
        },

        removeLovedItem: (id: String) => {
            set ({
                lovedItems: [...get().lovedItems.filter((item) => item.id != id)]
            })

            toast("El coche se ha eliminado de la lista")
        }
    }),
    {
        name: "loved-products-storage",
        storage: createJSONStorage(() => localStorage)
    }
    )
)
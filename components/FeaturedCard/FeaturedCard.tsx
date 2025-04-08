import { FeaturedCardProps } from "./FeaturedCard.type";

export function FeaturedCard({ title, icon: Icon, text }: FeaturedCardProps) {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col items-center justify-center gap-8 max-w-[300px]">
                <div className="flex items-center justify-center text-white bg-red-500 rounded-full p-5 mb-4">
                    <span className="material-symbols-outlined !font-bold !text-3xl !leading-none"><Icon /></span>
                </div>
                
                <h3 className="text-2xl font-bold text-black dark:text-white text-center">
                    {title}
                </h3>

                <p className="text-center text-gray-800 dark:text-gray-400 ">
                    {text}
                </p>

            </div>
        </div>
    )
}
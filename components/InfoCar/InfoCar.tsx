import Image from "next/image";

interface InfoCarProps {
    title: string;
    text: string;
    src: string;
  }

export function InfoCar({ title, text, src}: InfoCarProps) {
    return (
        <div className={`w-full md:w-[30%] flex flex-col`}>
            <div className="rounded-xl overflow-hidden">
            <Image width={400} height={300} className="w-full aspect-video object-cover" src={src} alt="" />
            </div>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>
            </div>
        </div>
    )
}
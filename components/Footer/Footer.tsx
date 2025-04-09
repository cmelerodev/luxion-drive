import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        

        <footer className="bg-white dark:bg-gray-900 border-t">
            <div className="w-full p-4 md:py-8">
                <div className="md:h-20 flex flex-col sm:flex-row items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <Image width={120} height={100} src="/luxion-drive-logo.webp" alt="logo Luxion Drive"></Image>
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href="/stock" className="hover:underline me-4 md:me-6">Stock</Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:underline me-4 md:me-6">Servicios</Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6">Contactar</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 Luxion Drive™. All Rights Reserved.</span>
            </div>
        </footer>


    )
}
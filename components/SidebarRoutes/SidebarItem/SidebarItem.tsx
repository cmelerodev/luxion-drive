import { usePathname } from "next/navigation";
import { SidebarItemProps } from "./SidebarItem.types";
import { cn } from "@/lib/utils";

export function SidebarItem(props: SidebarItemProps) {
    const { item } = props;
    const { href, icon: Icon,  label} = item;

    const pathname = usePathname();

    const activePath = pathname === href;
    return (
        <a 
            href={href}
            className={cn(
                'flex gap-x-2 mt-2 text-slate-700 dark:text-slate-200 text-sm items-center hover:bg-slate-300/20 dark:hover:bg-slate-500/20 p-2 rounded-lg cursor-pointer', 
                activePath && 'bg-slate-400/20'
            )}
        >
            <Icon className="h-5 w-5" strokeWidth={1} />
            {label}
        </a>
    )
}
"use client"
import Image from "next/image";
import Logo from "@/public/assets/logo2.png"
import {Button} from "@/components/ui/button";
import {Label} from "@/components/ui/label";
import Link from "next/link";
import {MobileNavigationDrawer} from "@/app/home/_home/components/mobile_navigation_drawer";
import {Menu} from "lucide-react";
import {usePathname} from "next/navigation";

export const TopNavigation = () => {
    const pathname = usePathname();
    console.log(pathname)
    return(
        <section id={"top-navbar"} className={"flex items-center justify-between h-fit pt-4 pb-2"}>
            <section id={"logo"}>
                <Image
                    width={100}
                    height={50}
                    src={Logo}
                    alt={"Kijani"}
                    priority
                    quality={90}
                />
            </section>
            <section id={"middle"} className={"hidden items-center gap-10 md:flex"}>
                <TopNavigationLink href={"/"} label={"Home"} isActive={pathname === "/"}/>
                <TopNavigationLink href={"/services"} label={"Services"} isActive={pathname === "/services"}/>
                <TopNavigationLink href={"/events"} label={"Events"} isActive={pathname === "/events"}/>
                <TopNavigationLink href={"/gallery"} label={"Gallery"} isActive={pathname === "/gallery"}/>
            </section>
            <section id={"actions"} className={"hidden md:flex"}>
                <a
                    href="https://wa.me/255782835507"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Button className={" flex items-center w-[200px] cursor-pointer h-10 rounded-full"}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24">
                            <path d="M20.5 3.5A11.937 11.937 0 0012 0C5.373 0 0 5.373 0 12c0 2.11.55 4.085 1.514 5.82L0 24l6.518-1.517A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12 0-3.192-1.246-6.203-3.5-8.5zm-8 17.25c-1.85 0-3.687-.5-5.273-1.438l-.374-.22-3.878.9.893-3.77-.23-.376A9.936 9.936 0 012.25 12c0-5.247 4.253-9.5 9.5-9.5s9.5 4.253 9.5 9.5-4.253 9.5-9.5 9.5zm5.218-7.963c-.075-.125-.274-.2-.57-.35-.294-.15-1.742-.86-2.012-.957-.27-.097-.466-.15-.66.15-.193.3-.74.957-.91 1.153-.17.193-.34.217-.634.075-.294-.143-1.244-.458-2.37-1.463-.875-.78-1.464-1.743-1.637-2.036-.17-.294-.018-.454.125-.606.128-.127.292-.33.44-.495.15-.165.2-.275.3-.458.1-.183.05-.344-.025-.494-.075-.15-.66-1.592-.906-2.18-.238-.572-.48-.495-.66-.505-.17-.01-.366-.012-.562-.012s-.494.075-.752.35c-.257.275-.975.952-.975 2.325 0 1.373 1 2.7 1.137 2.888.137.193 1.95 2.975 4.732 4.17.662.285 1.177.455 1.578.58.662.21 1.264.18 1.742.11.532-.075 1.742-.712 1.988-1.403.244-.69.244-1.285.17-1.403z"/>
                        </svg>
                        <Label className={"font-normal text-sm"}>+255 782 835 507</Label>
                    </Button>
                </a>
            </section>
            <section className={'flex md:hidden'}>
                <MobileNavigationDrawer>
                    <Button>
                        <Menu size={16}/>
                    </Button>
                </MobileNavigationDrawer>
            </section>

        </section>
    )

}


interface TopNavigationLinkProps{
    href: string
    label: string
    isActive?: boolean
    onClick?: () => void
}
export const TopNavigationLink = ({
    href,
    label,
    isActive = false,
    onClick
    }: TopNavigationLinkProps) => {
    return(
        <section className={"flex items-center gap-2 h-full"}>
            <section className={"w-2"}>
              {
                isActive && (
                    <span className={"flex w-2 h-2 bg-primary rounded-full"}/>
                )
              }
            </section>
            <Link
                onClick={onClick}
                href={href}
                className={`
                text-xl md:text-sm
                font-bold md:font-semibold
                text-primary
                flex items-center
                h-full w-full
                relative
                after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 ${isActive ? "after:w-[calc(100%+10px)]": "after:w-0"} after:bg-primary
                after:transition-all after:duration-300
                hover:after:w-full`}
            >
                {label}
            </Link>
        </section>
    )
}
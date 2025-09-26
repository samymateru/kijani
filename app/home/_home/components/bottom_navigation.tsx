import {Label} from "@/components/ui/label";
import Link from "next/link";
import {Mail, MapPinned, Phone} from "lucide-react";
import {ReactNode} from "react";
import FB from "@/public/assets/fb.svg";
import INSTAGRAM from "@/public/assets/instagram.svg";
import TWITTER from "@/public/assets/twitter.svg";
import WHATSAPP from "@/public/assets/whatsapp.svg";
import {Button} from "@/components/ui/button";
import Image from "next/image";
import TIKTOK from "@/public/assets/tiktok.svg";

export const BottomNavigation = () => {
    return (
        <section className={"min-h-[300px] bg-primary p-8"}>
            <section className={"flex justify-start flex-col md:flex-row gap-10"}>
                <section className={"flex flex-col gap-4 flex-1 h-[400px]"}>
                    <section>
                        <Label className={"font-bold text-xl text-primary-foreground"}>We Offer</Label>
                    </section>
                    <section className={"flex flex-col gap-4"}>
                        <BottomNavigationService
                            label={"Parking"}
                            description={"Free for ticket holders (up to 1000 vehicles)"}
                        />
                        <BottomNavigationService
                            label={"Shuttle"}
                            description={"Transport shuttle from city center"}
                        />
                        <BottomNavigationService
                            label={"Working Hours"}
                            description={"Open daily 6:00 AM - 11:30 PM"}
                        />
                    </section>
                </section>
                <section className={"flex flex-col gap-4 flex-1 h-[400px]"}>
                    <section>
                        <Label className={"font-bold text-xl text-primary-foreground"}>Quick Links</Label>
                    </section>
                    <section className={"flex flex-col gap-6"}>
                        <BottomNavigationLink href={"/"} label={"Home"}/>
                        <BottomNavigationLink href={"/services"} label={"Our Services"}/>
                        <BottomNavigationLink href={"/events"} label={"Events"}/>
                        <BottomNavigationLink href={"/gallery"} label={"Gallery"}/>
                    </section>
                </section>
                <section className={"flex flex-col gap-4 flex-1 h-[400px]"}>
                  <section>
                    <Label className={"font-bold text-xl text-primary-foreground"}>Get in touch</Label>
                  </section>
                  <section className={"flex flex-col gap-4"}>
                    <BottomNavigationContact label={"Chanika Ward, Ilala District, Dar es Salaam"} icon={<MapPinned size={18} className={"text-primary-foreground"}/>}/>
                    <BottomNavigationContact href={"https://wa.me/255782835507\n"} label={"+255 782 835 507"} icon={<Phone size={18} className={"text-primary-foreground"}/>}/>
                    <BottomNavigationContact href={"mailto:info@chanikakijani.co.tz?subject=Inquiry from Website"} label={"info@chanikakijani.co.tz"} icon={<Mail size={18} className={"text-primary-foreground"}/>}/>
                    <section id={"social"} className={"flex items-center gap-2"}>
                        <SocialMediaIcon src={INSTAGRAM} href={"https://www.instagram.com/chanika_kijani?igsh=MWtpZ2hnYjN3bTFiZQ%3D%3D&utm_source=qr\n"}/>
                        <SocialMediaIcon src={WHATSAPP} href={"https://wa.me/255782835507\n"}/>
                        <SocialMediaIcon src={TIKTOK} href={"https://www.tiktok.com/@chanika.kijani?_t=ZM-8zewMGpW8cq&_r=1"}/>
                        <SocialMediaIcon src={TWITTER}/>
                        <SocialMediaIcon src={FB}/>
                    </section>
                </section>
            </section>
            </section>
        </section>
    );
}


interface BottomNavigationServiceProps {
    label: string
    description: string
}

const BottomNavigationService = ({
    label,
    description
    }: BottomNavigationServiceProps) => {
    return(
        <section className={"flex flex-col h-10"}>
            <section>
                <Label className={"font-bold text-base text-primary-foreground"}>{label}</Label>
            </section>
            <section>
                <Label className={"font-normal text-primary-foreground text-sm"}>{description}</Label>
            </section>
        </section>
    )
}


interface BottomNavigationLinkProps {
    href: string
    label: string
}

const BottomNavigationLink = ({
     href,
     label
    }: BottomNavigationLinkProps) => {
    return(
        <section className={"flex flex-col"}>
            <Link
                href={href}
                className={"font-normal text-primary-foreground text-sm relative  after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300\n" +
                "hover:after:w-[calc(100%-180px)]"}>
                {label}
            </Link>
        </section>
    )
}




interface BottomNavigationContactProps{
    label: string
    icon: ReactNode,
    href?: string
}


const BottomNavigationContact = ({
    label,
    icon,
    href
    }: BottomNavigationContactProps) => {
    return(
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social media link"
        >
        <section className={"flex items-center gap-2 h-10"}>
            {icon}
            <Label className={"font-normal text-sm h-full text-primary-foreground italic"}>{label}</Label>
        </section>
        </a>
    )
}


interface  SocialMediaIconProps{
    src: string
    href?: string

}

export const SocialMediaIcon = ({src, href}: SocialMediaIconProps) => {
    return(
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Social media link"
        >
            <Button
                className="w-9 h-9 md:w-8 md:h-8 cursor-pointer border-neutral-400 flex !p-1"
                variant="outline"
            >
                <Image width={100} height={100} src={src} alt="Social icon" className="w-8 h-8" />
            </Button>
        </a>
    )
}
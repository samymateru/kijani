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

export const BottomNavigation = () => {
    return (
        <section className={"min-h-[300px] bg-primary p-8"}>
            <section className={"flex justify-start flex-col md:flex-row gap-10"}>
                <section className={"flex flex-col gap-2 flex-1 h-[300px]"}>
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
                <section className={"flex flex-col gap-2 flex-1 h-[300px]"}>
                    <section>
                        <Label className={"font-bold text-xl text-primary-foreground"}>Quick Links</Label>
                    </section>
                    <section className={"flex flex-col gap-4"}>
                        <BottomNavigationLink href={"#"} label={"Home"}/>
                        <BottomNavigationLink href={"#"} label={"Our Services"}/>
                        <BottomNavigationLink href={"#"} label={"About Us"}/>
                        <BottomNavigationLink href={"#"} label={"Gallery"}/>
                    </section>
                </section>
                <section className={"flex flex-col gap-2 flex-1 h-[300px]"}>
                  <section>
                    <Label className={"font-bold text-xl text-primary-foreground"}>Get in touch</Label>
                  </section>
                  <section className={"flex flex-col gap-4"}>
                    <BottomNavigationContact label={"Chanika Ward, Ilala District, Dar es Salaam"} icon={<MapPinned size={18} className={"text-primary-foreground"}/>}/>
                    <BottomNavigationContact label={"+255 782 835 507"} icon={<Phone size={18} className={"text-primary-foreground"}/>}/>
                    <BottomNavigationContact label={"info@chanikakijani.co.tz"} icon={<Mail size={18} className={"text-primary-foreground"}/>}/>
                    <section id={"social"} className={"flex items-center gap-2"}>
                        <SocialMediaIcon src={FB}/>
                        <SocialMediaIcon src={INSTAGRAM}/>
                        <SocialMediaIcon src={TWITTER}/>
                        <SocialMediaIcon src={WHATSAPP}/>
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
        <section className={"flex flex-col"}>
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
    icon: ReactNode
}


const BottomNavigationContact = ({
    label,
    icon
    }: BottomNavigationContactProps) => {
    return(
        <section className={"flex items-center gap-2"}>
            {icon}
            <Label className={"font-normal text-sm text-primary-foreground italic"}>{label}</Label>
        </section>
    )
}


interface  SocialMediaIconProps{
    src: string
}

export const SocialMediaIcon = ({src}: SocialMediaIconProps) => {
    return(
        <Button  className={"w-8 h-8 cursor-pointer border-neutral-400 flex !p-1"} variant={"outline"}>
            <Image width={100} src={src} alt="Instagram" className="w-8 h-8" />
        </Button>
    )
}
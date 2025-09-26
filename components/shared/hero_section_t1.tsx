import Image from "next/image";
import Logo from "@/public/assets/HOME.jpg";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {ArrowRight, Eye} from "lucide-react";

export const HeroSectionT1 = () => {
    return(
        <section className={"flex items-center gap-4 flex-col md:flex-row py-10 px-4 sm:px-8 md:px-14"}>
            <section id={"content"} className={"flex-1 flex flex-col gap-12"}>
                <section className={"flex flex-col gap-5"}>
                    <section id={"large-description"} className={"flex flex-col gap-2"}>
                        <Label className={"scroll-m-20 text-primary text-2xl md:text-3xl font-extrabold tracking-tight text-balance"}>
                            CHANIKA KIJANI BOTANICAL GARDENS AND AMUSEMENT PARK
                        </Label>
                        <Label className={"scroll-m-20 text-base font-bold italic text-neutral-800 tracking-tight"}>Where Nature, Culture, and Joy Come Together</Label>
                    </section>
                    <section id={"small-description"} className={""}>
                        <Label className={"font-semibold text-sm italic text-neutral-700"}>
                            Tucked away in the heart of Chanika, Dar es Salaam, our garden is more than a place — it’s an experience.
                            From vibrant flower paths to traditional foods and children’s play zones, to entertainment halls, various
                            sports to optional accommodation facilities and more!  Chanika City Botanical Garden is designed to be a relaxing,
                            family-friendly escape rooted in Tanzania’s natural beauty and cultural pride.
                        </Label>
                    </section>
                </section>
                <section id={"call-to-actions"} className={"md:flex hidden items-center gap-2 flex-col md:flex-row"}>
                    <Button variant={"outline"} className={"border-primary flex items-center gap-4 w-[200px] h-10 rounded-full"}>
                        <Label className={"font-normal text-sm"}>Our Services</Label>
                        <Eye size={18}/>
                    </Button>
                    <Button className={" flex items-center w-[200px] h-10 gap-4 rounded-full"}>
                        <Label className={"font-normal text-sm"}>Get in touch</Label>
                        <ArrowRight size={18}/>
                    </Button>
                </section>
            </section>
            <section id={"picture"} className={"flex-1"}>
                <Image
                    className="w-full h-auto aspect-[14/9] rounded-lg object-cover"
                    src={Logo}
                    alt={"Kijani"}
                    priority
                    quality={90}
                />
            </section>
            <section id={"call-to-actions"} className={"flex md:hidden flex-col items-center w-full gap-2"}>
                <Button variant={"outline"} className={"border-primary flex items-center gap-4 w-[calc(100%-50px)] md:w-[300px] rounded-md  h-10 md:rounded-full"}>
                    <Label className={"font-normal text-sm"}>View Our Services</Label>
                </Button>
                <Button className={"flex items-center w-[calc(100%-50px)] md:w-[300px] rounded-md  h-10 md:rounded-full"}>
                    <Label className={"font-normal text-sm"}>Get in touch</Label>
                </Button>
            </section>
        </section>
    )
}
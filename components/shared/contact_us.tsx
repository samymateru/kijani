import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Mail, Phone, SendHorizonal} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import FB from "@/public/assets/fb.svg"
import INSTAGRAM from "@/public/assets/instagram.svg"
import TWITTER from "@/public/assets/twitter.svg"
import WHATSAPP from "@/public/assets/whatsapp.svg"
import TIKTOK from "@/public/assets/tiktok.svg"
import Image from "next/image";
import {Button} from "@/components/ui/button";

export const ContactUs = ()=> {
    return(
        <section id={"contact"} className={"flex scroll-mt-16 gap-10 md:gap-4 py-10 px-4 sm:px-8 flex-col md:flex-row md:px-14"} >
            <section id={"form"} className={"flex flex-col gap-10 flex-1"}>
                <section className={"flex flex-col gap-2"}>
                    <section id={"header"}>
                        <Label className={"scroll-m-20 text-primary text-2xl md:text-3xl  font-extrabold tracking-tight text-balance"}>Get In Touch</Label>
                    </section>
                    <section id={"description"}>
                        <Label className={"font-semibold text-sm italic text-neutral-700"}>
                            Your voice matters to us. Reach out today and let’s explore <br /> how we can
                            help, guide, and grow with you.
                        </Label>
                    </section>
                </section>
                <section id={"form-body"} className={"flex flex-col gap-10"}>
                    <section className={"flex flex-col gap-6"}>
                        <ContactInput
                            label={"Full Name"}
                            placeholder={"John Doe"}
                        />
                        <ContactInput
                            label={"Email Address"}
                            placeholder={"johndoe@gmail.com"}
                        />
                        <ContactTextArea
                            label={"Your Message"}
                        />
                    </section>
                    <section className={"flex w-full justify-center md:justify-start"}>
                        <Button className={"flex w-[calc(100%-50px)] md:w-[300px] h-10 gap-4 rounded-md md:rounded-full"}>
                            <Label className={"font-normal text-sm"}>Submit</Label>
                            <SendHorizonal size={18}/>
                        </Button>
                    </section>
                </section>
            </section>
            <section id={"contacts"} className={"flex-1 flex items-center justify-center"}>
                <section className={"flex flex-col gap-10"}>
                    <section className={"flex flex-col md:flex-row items-center gap-10"}>
                        <section id={"visit"} className={"flex flex-col gap-1  p-4"}>
                            <section className={"flex justify-center w-full"}>
                                <Label className={"font-bold text-primary text-center text-xl"}>Visit Us</Label>
                            </section>
                            <section className={"flex justify-center w-full"}>
                                <Label className={"font-semibold text-sm text-center italic text-neutral-700"}>
                                    Chanika Ward, <br/> Ilala District, Dar es Salaam
                                </Label>
                            </section>
                        </section>
                        <section id={"talk"} className={"flex flex-col gap-2"}>
                            <section className={"flex justify-center w-full"}>
                                <Label className={"font-bold text-primary text-center  text-xl"}>Talk to Us</Label>
                            </section>
                            <section className={"flex flex-col items-center gap-1"}>
                                <section className={"flex items-center gap-2"}>
                                    <Phone size={20}/>
                                    <Label className={"font-semibold text-sm italic text-neutral-700"}>+255 782 835 507</Label>
                                </section>
                                <section className={"flex items-center gap-2"}>
                                    <Mail size={20}/>
                                    <Label className={"font-semibold text-sm italic text-neutral-700"}>info@chanikakijani.co.tz</Label>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section id={"social"} className={"flex flex-col gap-2 self-center"}>
                        <section className={"flex justify-center w-full"}>
                            <Label className={"font-bold text-primary text-center  text-xl"}>Social Media</Label>
                        </section>
                        <section className={"flex items-center gap-2"}>
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
    )
}


interface ContactInputProps {
    label: string
    placeholder?: string
}

const ContactInput = ({
    label,
    placeholder
    }: ContactInputProps) => {
    return (
        <section className={"flex flex-col gap-2"}>
            <section className={"flex items-center gap-2"}>
                <Label className={"font-normal text-sm"}>{label}</Label>
            </section>
            <Input placeholder={placeholder} className={"border-b-2  placeholder:text-neutral-600 border-b-green-500  w-full md:w-[calc(100%-50px)] rounded-none focus:outline-none focus:border-primary"}/>
        </section>
    )
}


interface ContactTextAreaProps {
    label: string
}

const ContactTextArea = ({
    label
    }: ContactTextAreaProps) => {
    return (
        <section className={"flex flex-col gap-2"}>
            <section className={"flex items-center gap-2"}>
                <Label className={"font-normal text-sm"}>{label}</Label>
            </section>
            <Textarea placeholder={"Write anything"} className={"border-b-2 border-b-green-500 w-full md:w-[calc(100%-50px)] rounded-none focus:outline-none focus:border-primary"}/>
        </section>
    )
}


interface  SocialMediaIconProps{
    src: string,
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
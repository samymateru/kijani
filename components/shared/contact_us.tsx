import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Mail, Phone, SendHorizonal} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {Button} from "@/components/ui/button";
import FB from "@/public/assets/fb.svg"
import INSTAGRAM from "@/public/assets/instagram.svg"
import TWITTER from "@/public/assets/twitter.svg"
import WHATSAPP from "@/public/assets/whatsapp.svg"

import Image from "next/image";

export const ContactUs = ()=> {
    return(
        <section className={"flex gap-2 py-10 px-4 sm:px-8 flex-col md:flex-row md:px-14"} >
            <section id={"form"} className={"flex flex-col gap-10 flex-1"}>
                <section className={"flex flex-col gap-2"}>
                    <section id={"header"}>
                        <Label className={"scroll-m-20 text-primary text-2xl md:text-3xl  font-extrabold tracking-tight text-balance"}>Contact Us</Label>
                    </section>
                    <section id={"description"}>
                        <Label className={"font-semibold text-sm italic text-neutral-700"}>
                            Your voice matters to us. Reach out today and let’s explore <br /> how we can
                            help, guide, and grow with you.
                        </Label>
                    </section>
                </section>
                <section id={"form-body"} className={"flex flex-col gap-6"}>
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
                    <section>
                        <Button className={" flex items-center w-full md:w-[250px] h-10 gap-4 rounded-full"}>
                            <Label className={"font-normal text-sm"}>Submit</Label>
                            <SendHorizonal size={18}/>
                        </Button>
                    </section>

                </section>
            </section>
            <section id={"contacts"} className={"flex-1 flex items-center justify-center"}>
                <section className={"flex flex-col gap-10"}>
                    <section className={"flex items-center gap-10"}>
                        <section id={"visit"} className={"flex flex-col gap-1 border-primary border p-4"}>
                            <section>
                                <Label className={"font-bold text-primary text-xl"}>Visit Us</Label>
                            </section>
                            <section>
                                <Label className={"font-semibold text-sm italic text-neutral-700"}>
                                    Chanika Ward, <br/> Ilala District, Dar es Salaam
                                </Label>
                            </section>
                        </section>
                        <section id={"talk"} className={"flex flex-col gap-2"}>
                            <section>
                                <Label className={"font-bold text-primary  text-xl"}>Talk to Us</Label>
                            </section>
                            <section className={"flex flex-col gap-1"}>
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
                        <section>
                            <Label className={"font-bold text-primary  text-xl"}>Social Media</Label>
                        </section>
                        <section className={"flex items-center gap-2"}>
                            <SocialMediaIcon src={FB}/>
                            <SocialMediaIcon src={INSTAGRAM}/>
                            <SocialMediaIcon src={TWITTER}/>
                            <SocialMediaIcon src={WHATSAPP}/>
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
                <Label className={"font-normal italic text-sm"}>{label}</Label>
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
    src: string
}

export const SocialMediaIcon = ({src}: SocialMediaIconProps) => {
    return(
        <Button  className={"w-8 h-8 cursor-pointer border-neutral-400 flex !p-1"} variant={"outline"}>
            <Image width={100} src={src} alt="Instagram" className="w-8 h-8" />
        </Button>
    )
}
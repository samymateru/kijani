import {Label} from "@/components/ui/label";
import {AttractionSection} from "@/components/shared/attraction_section";

export default function ServicesPage(){
    return(
        <section className={"flex flex-col gap-10 mt-6"}>
            <section className={"flex flex-col gap-4 px-5"}>
                <Label className={"font-bol text-primary text-3xl md:text-4xl"}>Our Services – Where Nature Meets Hospitality</Label>
                <Label className={"font-normal text-base md:w-1/2"}>
                    At Chanika Kijani, we offer a diverse range of services designed to bring people
                    closer to nature while promoting sustainability, relaxation, and community engagement.
                    Whether you&#39;re seeking a tranquil escape, educational tours, eco-friendly accommodations,
                    or venue hire for special events, our services are tailored to provide memorable and meaningful
                    experiences within the beauty of our botanical garden.
                </Label>
            </section>
            <section className={"min-h-[calc(100svh-100px)] flex items-center justify-center"}>
                <AttractionSection/>
            </section>
        </section>
     
    )
}
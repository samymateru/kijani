import {Label} from "@/components/ui/label";
import Image from "next/image";
import PIC from "@/public/assets/ATT5.png";


export const AboutUsSection = () => {
    return (
        <section className={"flex flex-col gap-2 py-10 px-4 sm:px-8 md:px-14"}>
            <section>
                <section>
                    <Label className={"scroll-m-20 text-neutral-700 text-3xl font-extrabold tracking-tight text-balance"}>About Us</Label>
                    <Label className={"scroll-m-20 text-primary text-3xl font-extrabold tracking-tight text-balance"}> Chanika Kijani Botanical Garden</Label>
                </section>
                <section>
                    <Label className="text-sm md:text-base text-neutral-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at
                        sapien nec justo fringilla accumsan. Suspendisse potenti.
                    </Label>
                </section>
            </section>
            <section id="about-content" className="flex flex-col justify-start md:flex-col sm:flex-col lg:flex-row gap-6 items-center md:items-start">
                {/* Media Section */}
                <section id="about-media" className="w-full flex flex-col md:flex-col lg:flex-row gap-3">
                    <Image
                        className="w-full h-auto aspect-[14/9] rounded-lg object-cover"
                        src={PIC}
                        alt="Kijani"
                        priority
                        quality={90}
                    />
                    <section className={"w-full"}>
                        <section id="about-body" className="w-full flex-col md:flex-row flex  gap-2">
                            <AboutContent title={"Our Vision"} data={"Chanika City Botanical Garden is a uniquely designed" +
                                " botanical park. Our vision is to create a peaceful and" +
                                " vibrant space for leisure, learning, cultural celebration, " +
                                "and community gatherings. Whether you’re visiting for a school " +
                                "tour, a family getaway, cooperate meeting or a wedding celebration" +
                                " — there’s space for you here."}/>

                            <AboutContent title={"Our Mission"} data={"Our mission is to inspire a love for nature, bring " +
                                "people together, and provide a space where families, schools, and organizations can " +
                                "celebrate life, learn, and reconnect with the environment."}/>
                        </section>
                        <section>
                            hello there
                        </section>
                    </section>
                </section>

                {/* Body Section */}
            </section>
        </section>
    )
}



interface AboutContentProps{
    title: string
    data: string
}

const AboutContent = ({title, data}: AboutContentProps) => {
    return (
        <section id={"mission"} className={'bg-green-200 flex flex-col gap-3 py-5 px-4 flex-1 md:p-5 rounded-lg'}>
            <section id={"vision"}>
                <Label className="text-primary text-lg md:text-xl font-extrabold tracking-tight drop-shadow-md">
                    {title}
                </Label>
                <Label className={"font-normal text-sm text-balance"}>
                    {data}
                </Label>
            </section>
        </section>
    )
}
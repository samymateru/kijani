import Image from "next/image";
import { Label } from "@/components/ui/label";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {CircleCheck} from "lucide-react";


export interface AttractionCardProps {
    src: string | StaticImport,
    title: string,
    description: string,
    features: string[]
}


export const AttractionCard = ({
      src,
      title,
      description,
      features
    }: AttractionCardProps) => {
    return (
        <section className="bg-green-50 rounded-md shadow-md flex flex-col">
            {/* Background Image */}
            <section id="background_image" className={'relative'}>
                <Image
                    src={src}
                    alt="Event Banner"
                    className="w-full aspect-[14/9] object-cover rounded-t-md"
                    priority
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/80 to-transparent rounded-b-md" />

                <Label className="absolute bottom-3 left-4 text-neutral-100 text-lg md:text-xl font-extrabold tracking-tight drop-shadow-md backdrop-blur-sm bg-black/30 px-3 py-1 rounded">
                    {title}
                </Label>
            </section>

            {/* Card Content */}
            <section id="card_content" className="p-4 flex flex-col gap-4 flex-grow">
                <section className="mt-2">
                    <Label
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2, // clamp to 2 lines
                            WebkitBoxOrient: "vertical",
                        }}
                        className="mt-1 w-full overflow-hidden  text-neutral-900 text-sm md:text-base font-semibold tracking-tight leading-relaxed"
                    >
                        {description}
                    </Label>
                </section>
                <section className={"flex flex-col gap-3 pb-4"}>
                    {features.map((feature, i) => (
                        <Tick key={i} label={feature}/>
                    ))}
                </section>
            </section>
        </section>
    );
};


interface TickProps {
    label: string
}
const Tick = ({label}: TickProps) => {
    return(
        <section className={"flex items-start gap-2"}>
            <section>
                <CircleCheck size={16} className={"mt-1"} strokeWidth={2}/>
            </section>
            <Label className={"font-normal text-sm"}>{label}</Label>
        </section>
    )
}
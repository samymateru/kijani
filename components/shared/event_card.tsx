import Image from "next/image";
import PIC from "@/public/assets/ATT5.png";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { Calendar, CircleEllipsis, MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

export const EventCard = () => {
    return (
        <section className="bg-green-50 rounded-md shadow-md flex flex-col">
            {/* Background Image */}
            <section id="background_image" className={'relative'}>
                <Image
                    src={PIC}
                    alt="Event Banner"
                    className="w-full aspect-[14/9] object-cover rounded-t-md"
                    priority
                />
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary/80 to-transparent rounded-b-md" />

                <Label className="absolute bottom-3 left-4 text-neutral-100 text-lg md:text-xl font-extrabold tracking-tight drop-shadow-md">
                    Sunset Jazz in the Garden
                </Label>
            </section>

            {/* Card Content */}
            <section id="card_content" className="p-4 flex flex-col flex-grow">
                <section className="mt-2">
                    <Label
                        style={{
                            display: "-webkit-box",
                            WebkitLineClamp: 2, // clamp to 2 lines
                            WebkitBoxOrient: "vertical",
                        }}
                        className="mt-1 w-full overflow-hidden  text-neutral-900 text-sm md:text-base font-semibold tracking-tight leading-relaxed"
                    >
                        Join us for live music under the stars with food & drinks in the open.
                        Join us for live music under the stars with food & drinks in the open.
                    </Label>
                </section>

                {/* Details */}
                <section className="flex justify-start flex-col gap-[2px] mt-3 flex-wrap">
                    <EventDetailItem icon={<MapPinned size={16} className={"text-neutral-700"}/>} title={"Chanika Kijani HQ"} />
                    <EventDetailItem icon={<Calendar size={16} className={"text-neutral-700"}/>} title={"12 JAN 2026"} />
                </section>
                <section className="flex w-full justify-end mt-4">
                    <EventActionItem variant={'default'} title={"Read More"} icon={<CircleEllipsis size={16} />} />
                </section>
            </section>
        </section>
    );
};

/* Event detail item */
interface EventDetailItemProps {
    title: string;
    icon?: ReactNode;
}
const EventDetailItem = ({ title, icon }: EventDetailItemProps) => (
    <section className="flex items-center gap-2">
        {icon}
        <Label className="font-normal text-sm">{title}</Label>
    </section>
);


interface EventActionItemProps {
    title: string;
    icon?: ReactNode;
    variant?: "outline" | "default";
}
const EventActionItem = ({ title, icon, variant = "outline" }: EventActionItemProps) => (
    <Button
        variant={variant}
        className="flex w-[calc(100%-100px)] md:w-[200px] my-2  px-3 md:px-4 rounded-full h-8 items-center gap-2 font-normal text-xs md:text-sm border-neutral-400"
    >
        {title}
        {icon}
    </Button>
);

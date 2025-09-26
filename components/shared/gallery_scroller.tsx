"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {Card, CardContent} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import Image from "next/image";
import PIC1 from "@/public/assets/ATT5.png"
import PIC2 from "@/public/assets/ATTR6.png"
import PIC3 from "@/public/assets/ATTR2.png"
import PIC4 from "@/public/assets/ATTR7.png"
import {Button} from "@/components/ui/button";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import {useRouter} from "next/navigation";
import {ArrowRight} from "lucide-react";



export const GalleryScroller = () => {
    const router = useRouter()
    return (
        <section className="flex justify-center h-fit py-10 px-4 sm:px-8 md:px-14">
            <section className="flex flex-col items-center gap-4 w-full">
                <section className={"w-full flex flex-col md:flex-row gap-5 md:gap-10  items-center justify-between"}>
                    <section className={"flex-1"}>
                        <Label className="scroll-m-20 text-primary  text-2xl md:text-3xl font-extrabold tracking-tight text-center">
                            Top Sites To Visit
                        </Label>
                    </section>
                    <section className={"flex flex-1 justify-center md:justify-end w-full"}>
                        <Button onClick={() => router.push("/gallery")} variant={"outline"} className={"border cursor-pointer border-neutral-400 w-[calc(100%-50px)] md:w-[300px] rounded-md md:rounded-full"}>
                            View All Sites
                            <ArrowRight size={16}/>
                        </Button>
                    </section>
                </section>
                <section className="w-full max-w-7xl flex justify-center">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            <GalleryItem src={PIC1} />
                            <GalleryItem src={PIC2} />
                            <GalleryItem src={PIC3} />
                            <GalleryItem src={PIC4} />
                        </CarouselContent>
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                    </Carousel>
                </section>
            </section>
        </section>
    );
};


interface GalleryItemProps{
    src: string | StaticImport
}

const GalleryItem = ({ src }: GalleryItemProps) => {
    return (
        <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
            <Card className="!p-0 bg-neutral-500">
                <CardContent className="!p-0">
                    <Image
                        className="w-full h-auto aspect-[14/9] rounded-lg object-cover"
                        src={src}
                        alt="Kijani"
                        priority
                        quality={90}
                    />
                </CardContent>
            </Card>
        </CarouselItem>
    );
};

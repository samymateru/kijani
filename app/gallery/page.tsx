import {StaticImport} from "next/dist/shared/lib/get-img-props";
import PIC1 from "@/public/assets/gallery/1 (1).jpg"
import PIC2 from "@/public/assets/gallery/1 (2).jpg"
import PIC3 from "@/public/assets/gallery/1 (3).jpg"
import PIC4 from "@/public/assets/gallery/1 (4).jpg"
import PIC5 from "@/public/assets/gallery/1 (5).jpg"
import PIC6 from "@/public/assets/gallery/1 (6).jpg"
import PIC7 from "@/public/assets/gallery/1 (7).jpg"
import PIC8 from "@/public/assets/gallery/1 (8).jpg"
import PIC9 from "@/public/assets/gallery/1 (9).jpg"
import PIC10 from "@/public/assets/gallery/10.jpg"
import PIC11 from "@/public/assets/gallery/ATT5.png"
import PIC12 from "@/public/assets/gallery/1 (24).jpg"
import PIC13 from "@/public/assets/gallery/1 (7).jpg"
import PIC14 from "@/public/assets/gallery/attr 1.jpg"
import PIC15 from "@/public/assets/gallery/attractive last.jpg"
import PIC16 from "@/public/assets/gallery/kijani 1 (7).jpg"
import PIC17 from "@/public/assets/gallery/kijani 1 (1).jpg"
import PIC18 from "@/public/assets/gallery/kijani 1 (2).jpg"
import PIC19 from "@/public/assets/gallery/kijani 1 (3).jpg"
import PIC20 from "@/public/assets/gallery/kijani 1 (4).jpg"
import PIC21 from "@/public/assets/gallery/kijani 1 (9).jpg"
import PIC22 from "@/public/assets/gallery/kijani 1 (6).jpg"
import PIC23 from "@/public/assets/gallery/kijani 1 (8).jpg"


import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Label} from "@/components/ui/label";
// import {Button} from "@/components/ui/button";


export default function GalleryPage() {
    return(
        <section className={"py-5 flex flex-col gap-20 mt-10"}>
            <section className={"flex flex-col gap-4"}>
                <Label className={"text-primary font-bold text-3xl"}>Discover Our Garden Through the Lens</Label>
                <Label className={"font-medium text-base italic text-neutral-800 w-full md:w-1/2"}>Step into a world of vibrant colors and natural beauty as we invite you to explore
                    Chanika Kijani through captivating photographs. Each image tells a story of growth,
                    serenity, and the timeless charm of our botanical garden. Let your eyes wander through
                    blooming flowers, lush greenery, and peaceful pathways — all captured through the
                    lens to bring the garden closer to you
                </Label>
            </section>
            <section className="columns-[300px] gap-4">
                <GalleryItem src={PIC1} label="Event Night" />
                <GalleryItem src={PIC2} label="Event Night" />
                <GalleryItem src={PIC3} label="Event Night" />
                <GalleryItem src={PIC4} label="Event Night" />
                <GalleryItem src={PIC5} label="Event Night" />
                <GalleryItem src={PIC6} label="Event Night" />
                <GalleryItem src={PIC7} label="Event Night" />
                <GalleryItem src={PIC8} label="Event Night" />
                <GalleryItem src={PIC9} label="Event Night" />
                <GalleryItem src={PIC10} label="Event Night" />
                <GalleryItem src={PIC11} label="Event Night" />
                <GalleryItem src={PIC12} label="Event Night" />
                <GalleryItem src={PIC13} label="Event Night" />
                <GalleryItem src={PIC14} label="Event Night" />
                <GalleryItem src={PIC15} label="Event Night" />
                <GalleryItem src={PIC16} label="Event Night" />
                <GalleryItem src={PIC17} label="Event Night" />
                <GalleryItem src={PIC18} label="Event Night" />
                <GalleryItem src={PIC19} label="Event Night" />
                <GalleryItem src={PIC20} label="Event Night" />
                <GalleryItem src={PIC21} label="Event Night" />
                <GalleryItem src={PIC22} label="Event Night" />
                <GalleryItem src={PIC23} label="Event Night" />
            </section>
        </section>


    )
}

interface GalleryItemProps {
    src: string | StaticImport
    label?: string
}

const GalleryItem = ({ src, label }: GalleryItemProps) => {
    return(
        <section className={"rounded-lg w-full mt-6 md:mt-3 hover:scale-[102%] transition-[scale] duration-200 ease-in-out"}>
            <Card className="!p-0 w-full shadow-md rounded-lg">
                <CardContent className="!p-0 relative rounded-lg">
                    {/* Image */}
                    <div className="relative w-full overflow-hidden">
                        <Image
                            src={src}
                            alt={label || "Gallery Image"}
                            width={400}           // fixed width or full width of container
                            height={600}          // optional, just initial ratio
                            style={{ width: '100%', height: 'auto' }} // makes height scale naturally
                            className="object-cover rounded-lg"
                            priority
                            quality={90}
                        />
                    </div>

                    {/* Caption text */}
                    {label && (
                        <div className="absolute bottom-0 w-full bg-gradient-to-t from-primary/90 to-transparent text-white p-3 rounded-lg flex items-cente justify-between">
                            <Label className="text-xl font-bold">
                              {label}
                            </Label>
                            {/*<Button  className="bg-primary-foreground cursor-pointer hover:bg-primary-foreground/80 w-[100px] text-primary text-xs sm:text-sm px-3 py-1 rounded-full shadow-md transition">*/}
                            {/*    View*/}
                            {/*</Button>*/}
                        </div>

                    )}
                </CardContent>
            </Card>
        </section>
    )
}
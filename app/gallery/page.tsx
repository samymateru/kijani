import {StaticImport} from "next/dist/shared/lib/get-img-props";
import PIC1 from "@/public/assets/HOME.jpg"
import PIC2 from "@/public/assets/ATT5.png";
import PIC3 from "@/public/assets/10.jpg";
import PIC4 from "@/public/assets/304.jpg";

import {Card, CardContent} from "@/components/ui/card";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";


export default function GalleryPage() {
    return(
        <section className="columns-[300px] gap-2 bg-green-100">
            <GalleryItem src={PIC2} label="Event Night" />
            <GalleryItem src={PIC3} label="Family Picnic" />
            <GalleryItem src={PIC4} label="Botanical Walk" />
            <GalleryItem src={PIC1} label="Garden View" />
            <GalleryItem src={PIC1} label="Garden View" />
            <GalleryItem src={PIC1} label="Garden View" />
            <GalleryItem src={PIC3} label="Family Picnic" />
            <GalleryItem src={PIC2} label="Event Night" />
            <GalleryItem src={PIC3} label="Family Picnic" />
            <GalleryItem src={PIC4} label="Botanical Walk" />
            <GalleryItem src={PIC1} label="Garden View" />
            <GalleryItem src={PIC1} label="Garden View" />
            <GalleryItem src={PIC3} label="Family Picnic" />

        </section>

    )
}

interface GalleryItemProps {
    src: string | StaticImport
    label?: string
}

const GalleryItem = ({ src, label }: GalleryItemProps) => {
    return(
        <section className={"rounded-lg w-full mt-3 hover:scale-[102%] transition-[scale] duration-200 ease-in-out"}>
            <Card className="!p-0 w-full bg-green-100 shadow-md rounded-lg">
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
                            <Button  className="bg-primary-foreground cursor-pointer hover:bg-primary-foreground/80 w-[100px] text-primary text-xs sm:text-sm px-3 py-1 rounded-full shadow-md transition">
                                View
                            </Button>
                        </div>

                    )}
                </CardContent>
            </Card>
        </section>
    )
}
import {Label} from "@/components/ui/label";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {EventCard, EventCardProps} from "@/components/shared/event_card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";
import PIC1 from "@/public/assets/events/beach.jpg"



const events: EventCardProps[] = [
    {
        src: PIC1,
        title: "Orchid Bloom Festival",
        description: "Celebrate the peak bloom of our rare orchid collection with guided tours and expert talks.",
        location: "Orchid Pavilion, Chanika Kijani",
        date: "2025-10-12"
    },
    {
        src: PIC1,
        title: "Moonlight Garden Walk",
        description: "Experience the garden under the stars with ambient lighting, storytelling, and night-blooming flowers.",
        location: "Main Entrance Trail, Chanika Kijani",
        date: "2025-11-02"
    },
    {
        src: PIC1,
        title: "Junior Nature Explorers Camp",
        description: "A fun-filled learning event for kids to discover plants, bugs, and nature conservation.",
        location: "Learning Grove, Chanika Kijani",
        date: "2025-10-25"
    },
    {
        src: PIC1,
        title: "Herbal Healing Workshop",
        description: "Learn the basics of herbal remedies and create your own healing teas and balms.",
        location: "Herb Garden Amphitheatre",
        date: "2025-11-10"
    },
    {
        src: PIC1,
        title: "Succulent & Cactus Showcase",
        description: "Explore a curated exhibition of drought-resistant beauties with propagation demos.",
        location: "Desert Zone, Chanika Kijani",
        date: "2025-10-30"
    }
];



export const EventScroller = () => {
    return(
        <section className="flex justify-center h-fit py-10 px-4 sm:px-8 md:px-14 mb-10 md:mb-4">
            <section className="flex flex-col items-center gap-4 w-full">
                <section className={"w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-between"}>
                    <section className={"flex-1"}>
                        <Label className="scroll-m-20 text-primary text-2xl md:text-3xl font-extrabold tracking-tight text-center">
                            Up Coming Events
                        </Label>
                    </section>
                    <section className={"flex flex-1 justify-center md:justify-end w-full"}>
                        <Button variant={"outline"} className={"border cursor-pointer border-neutral-400 rounded-md md:rounded-full w-[calc(100%-50px)] md:w-[300px]"}>
                            View All Events
                            <ArrowRight size={16}/>
                        </Button>
                    </section>
                </section>
                <section className="w-full max-w-7xl  flex justify-center">
                    <Carousel opts={{ align: "start" }} className="w-full relative  [&_.carousel-button]:hidden">
                        <CarouselContent>
                            {
                                events.map((event,index) => (
                                    <CarouselItem key={index}
                                                  className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                        <Card className="!p-0 bg-neutral-500">
                                            <CardContent className="!p-0">
                                                <EventCard
                                                    src={event.src}
                                                    title={event.title}
                                                    description={event.description}
                                                    date={event.date}
                                                    location={event.location}
                                                />
                                            </CardContent>
                                        </Card>
                                    </CarouselItem>
                                ))
                            }

                        </CarouselContent>
                        <div className="flex gap-10 justify-center mt-4 absolute md:relative md:bottom-1/2 -bottom-12 left-1/2 -translate-x-1/2">
                            <CarouselPrevious className="w-10 h-10 rounded-md" variant="default" />
                            <CarouselNext className="w-10 h-10 rounded-md" variant="default" />
                        </div>
                    </Carousel>
                </section>
            </section>
        </section>
        )
}
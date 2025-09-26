import {Label} from "@/components/ui/label";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Card, CardContent} from "@/components/ui/card";
import {EventCard} from "@/components/shared/event_card";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";


export const EventScroller = () => {
    return(
        <section className="flex justify-center h-fit py-10 px-4 sm:px-8 md:px-14">
            <section className="flex flex-col items-center gap-4 w-full">
                <section className={"self start w-full flex flex-col md:flex-row gap-4 items-center justify-between"}>
                    <section>
                        <Label className="scroll-m-20 text-primary text-2xl md:text-3xl font-extrabold tracking-tight text-center">
                            Up Coming Events
                        </Label>
                    </section>
                    <section>
                        <Button variant={"outline"} className={"border cursor-pointer border-neutral-400 rounded-full"}>
                            View All Events
                            <ArrowRight size={16}/>
                        </Button>
                    </section>
                </section>
                <section className="w-full max-w-7xl flex justify-center">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                <Card className="!p-0 bg-neutral-500">
                                    <CardContent className="!p-0">
                                       <EventCard/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                <Card className="!p-0 bg-neutral-500">
                                    <CardContent className="!p-0">
                                        <EventCard/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                <Card className="!p-0 bg-neutral-500">
                                    <CardContent className="!p-0">
                                        <EventCard/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                            <CarouselItem className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/3">
                                <Card className="!p-0 bg-neutral-500">
                                    <CardContent className="!p-0">
                                        <EventCard/>
                                    </CardContent>
                                </Card>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious variant="default" />
                        <CarouselNext variant="default" />
                    </Carousel>
                </section>
            </section>
        </section>
        )
}
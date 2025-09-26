import {EventCard, EventCardProps} from "@/components/shared/event_card";
import PIC1 from "@/public/assets/events/beach.jpg";
import {Label} from "@/components/ui/label";


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


export default function EventsPage(){
    return(
        <section className={"flex flex-col gap-16 mt-5"}>
            <section className={"flex flex-col gap-4"}>
                <Label className={"font-bold text-primary text-3xl md:text-4xl"}>
                    Highlights from Our Top <br/>Garden Events
                </Label>
                <Label className={""}>Relive the standout experiences that define Chanika Kijani</Label>
            </section>

            <section>
                {
                    events.map((event,index) => (
                        <EventCard
                            key={index}
                            src={event.src}
                            title={event.title}
                            description={event.description}
                            location={event.location}
                            date={event.date}/>
                    ))
                }
            </section>
        </section>

    )
}
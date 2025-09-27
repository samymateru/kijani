import {AttractionCard} from "@/components/shared/attractions";
import {Label} from "@/components/ui/label";
import GRAND_WALK from "@/public/assets/304.jpg";
import CHILDREN from "@/public/assets/3379.jpg"
import GARDEN from "@/public/assets/ATTR6.png"
import ACC from "@/public/assets/house.jpeg"

export const AttractionSection = () => {
    return(
        <section className={"flex flex-col gap-6 pb-4 px-5 md:px-12"}>
            <section>
                <Label className={"font-bold text-3xl md:text-4xl text-primary"}>Our Best Attractions</Label>
            </section>

            <section className={"flex flex-col gap-10"}>
                <section className={"w-full flex flex-col justify-center gap-10 md:flex-row"}>
                    <section className="w-full md:flex-1">
                        <AttractionCard
                            src={GARDEN}
                            title={"Themed Gardens"}
                            description={" ​Wander through immersive botanical spaces"}
                            features={[
                                "Fruit Tree Gardens: Mangoes, guavas, oranges & more – all pickable!",
                                "Spice Gardens: Experience local spices and buy fresh ingredients",
                                "Bamboo Gardens: Shaded picnic paths with decorative bamboo fencing",
                                "Herbal & Flower Gardens: Healing plants and colorful blooms",
                                "Specialty Gardens: Desert, Japanese, African, and Meditation spaces."
                            ]}
                        />
                    </section>
                    <section className="w-full md:flex-1">
                        <AttractionCard
                            src={GRAND_WALK}
                            title={"Grand Walkways"}
                            description={"Our grand walkways will guide you through:"}
                            features={[
                                "Bamboo plantations",
                                "Exotic and spice gardens",
                                "Themed landscapes",
                                "Reception & event areas",
                                "Made of concrete or tiles, thoughtfully \n" +
                                "designed by expert landscapers."
                            ]}
                        />
                    </section>
                </section>
                <section className={"w-full flex flex-col justify-center gap-10 md:flex-row"}>
                    <section className="w-full md:flex-1">
                        <AttractionCard
                            src={CHILDREN}
                            title={"Family Fun & Children’s Corner"}
                            description={"​Kids enjoy: "}
                            features={[
                                "​Swings, slides, seesaws\n",
                                "​Merry-go-rounds, whirled rides\n",
                                "​Climbing structures\n",
                                "​Safe, open space for play and exploration",
                                "A secure and spacious haven for discovery and play"
                            ]}
                        />
                    </section>
                    <section className="w-full md:flex-1">
                        <AttractionCard
                            src={ACC}
                            title={"Accommodation"}
                            description={"Stay overnight in natu​re with comfort"}
                            features={[
                                "14 Units: Cottages for honeymooners & families",
                                "hostels for students, teams, gospel choirs & honeymooners",
                                "Affordable Rates for Exceptional Comfort\"",
                                "Stay Smart — Great Value, Great Comfort",
                                "Great Parking for all Vehicles"
                            ]}
                        />
                    </section>
                </section>
            </section>
        </section>


    )
}
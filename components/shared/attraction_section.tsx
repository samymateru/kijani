import {AttractionCard} from "@/components/shared/attractions";
import PIC1 from "@/public/assets/10.jpg"

export const AttractionSection = () => {
    return(

        <section className="w-full md:w-[400px]">
            <AttractionCard
                src={PIC1}
                title={"Themed Gardens"}
                description={" ​Wander through immersive botanical spaces: "}
                features={[
                    "Fruit Tree Gardens: Mangoes, guavas, oranges & more – all pickable!",
                    "Spice Gardens: Experience local spices and buy fresh ingredients   "
                ]}
            />
        </section>
    )
}
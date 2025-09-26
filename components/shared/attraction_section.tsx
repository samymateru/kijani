import {AttractionCard} from "@/components/shared/attractions";
import PIC1 from "@/public/assets/10.jpg"

export const AttractionSection = () => {
    return(

        <section className="w-full md:w-[350px]">
            <AttractionCard src={PIC1} title={"hello"} description={""} features={[]}/>
        </section>
    )
}
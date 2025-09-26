import {AttractionCard} from "@/components/shared/attractions";
import PIC1 from "@/public/assets/10.jpg"

export const AttractionSection = () => {
    return(
        <section>
            <AttractionCard src={PIC1} title={"hello"} description={""} features={[]}/>
        </section>
    )
}
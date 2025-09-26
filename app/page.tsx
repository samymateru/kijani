import {HeroSectionT1} from "@/components/shared/hero_section_t1";
import {ContactUs} from "@/components/shared/contact_us";
import {GalleryScroller} from "@/components/shared/gallery_scroller";
import {AboutUsSection} from "@/components/shared/about_us";
import {EventScroller} from "@/app/home/_home/components/events_scroller";

export default function Home() {
  return (
      <section className={"flex flex-col md:gap-16  overflow-x-hidden"}>
        <HeroSectionT1/>
        <AboutUsSection/>
        <GalleryScroller/>
        <EventScroller/>
        <ContactUs/>
      </section>
  )
}






"use client"
import {Drawer, DrawerContent, DrawerTitle, DrawerTrigger} from "@/components/ui/drawer";
import {ReactNode, useState} from "react";
import {TopNavigationLink} from "@/app/home/_home/components/top-navigation";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";
import {usePathname} from "next/navigation";


interface MobileNavigationDrawerProps{
    children: ReactNode;
}
export const MobileNavigationDrawer = ({
    children
    }: MobileNavigationDrawerProps) => {

    const [open, onOpenChange] = useState<boolean>(false);
    const pathname = usePathname()

    return(
        <Drawer direction={"top"} open={open} onOpenChange={onOpenChange}>
            <DrawerTrigger asChild>{children}</DrawerTrigger>
            <DrawerContent  className="h-fit p-5 flex">
                <DrawerTitle className={"absolute"}></DrawerTitle>
                <section className={"p-5 flex flex-col gap-3 mt-5"}>
                    <section className={"h-[40px] w-full"}>
                        <TopNavigationLink
                            onClick={() => onOpenChange(false)}
                            href={"/"}
                            label={"H O M E"}
                            isActive={pathname === "/"}
                        />
                    </section>
                    <section className={"h-[40px] w-full"}>
                        <TopNavigationLink
                            onClick={() => onOpenChange(false)}
                            href={"/services"}
                            label={"S E R V I C E S"}
                            isActive={pathname === "/services"}
                        />
                    </section>
                    <section className={"h-[40px] w-full"}>
                        <TopNavigationLink
                            onClick={() => onOpenChange(false)}
                            href={"/gallery"}
                            label={"G A L L E R Y"}
                            isActive={pathname === "/gallery"}
                        />
                    </section>
                    <section className={"h-[40px] w-full"}>
                        <TopNavigationLink
                            onClick={() => onOpenChange(false)}
                            href={"/events"}
                            label={"E V E N T S"}
                            isActive={pathname === "/events"}
                        />
                    </section>
                </section>
              <Button onClick={() => onOpenChange(false)} className={"absolute top-2 right-4"}>
                  <X/>
              </Button>
            </DrawerContent>

        </Drawer>
    )
}

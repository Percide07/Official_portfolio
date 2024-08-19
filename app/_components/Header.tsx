import { Section } from "./Section"
import { Button, buttonVariants } from "@/components/ui/button"
import {GithubIcon} from "./icons/GithubIcon";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { TwitterIcon } from "./icons/TwitterIcon";

export const Header = () => {
    return (
        <header className=" top-0 py-4 z-10">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">
                    JP_ercide.com
                </h1>
                <div className="flex-1"/>
                    <ul className="flex items-center gap-2">
                        <Link 
                        href="https://github.com/Percide07"
                            className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}> 
                            <GithubIcon size={16} className="text-foreground" />
                        </Link>
                        <Link 
                        href="https://github.com/Percide07"
                            className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}> 
                            <LinkedinIcon size={16} className="text-foreground" />
                        </Link>
                        <Link 
                        href="https://github.com/Percide07"
                            className={cn(buttonVariants({variant: "outline"}),"size-6 p-0")}> 
                            <TwitterIcon size={16} className="text-foreground" />
                        </Link>
                    </ul>
            </Section>
        </header>
    )
}
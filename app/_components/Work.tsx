/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export type WorkProps = {
    image: string | StaticImageData; 
    title: string; 
    role: string;
    date: string;
    url: string;
    freelance?: boolean;
};

export const Work = (props: WorkProps) => {
    return (
        <Link href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <Image 
                src={props.image} 
                alt={props.title} 
                className="w-10 h-10 object-cover rounded-full border-2 border-300" // Add border and rounded class
                width={40} // Adjust the width as needed
                height={40} // Adjust the height as needed
            />

            <div className="mr-auto">
                <div className="flex items-center gap-2">
                    <p className="text-lg font-semibold">{props.title}</p>
                    {props.freelance && <Badge variant="outline">Freelance</Badge>}
                </div>
                <p className="text-xs text-muted-foreground">
                    {props.role}
                </p>
            </div>
            <p className="text-xs text-end text-muted-foreground">{props.date}</p>
        </Link>
    );
};

/* eslint-disable @next/next/no-img-element */
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import my_face from "./icons/my_face.jpeg";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Code } from "./Code";

export const Hero = async () => {
    return (
        <Section className="flex max-lg:flex-col items-start gap-4">
          <div className="flex-[3] w-full flex flex-col gap-2">
            <h2 className="font-caption font-bold text-5xl text-primary">Josué P. HONHONOU</h2>
            <h3 className="text-3xl font-caption ">
              Electronics Engineer and Full Stack Developer (React, Java Spring Boot & MERN Stack).
            </h3>
            <p className="text-base">
            Passionate about creating innovative user experiences, I leverage 
            my web development skills to deliver elegant and efficient solutions for your projects. 
            Originally from {" "}
            <Code className="inline-flex items-center gap-1"> 
                     Benin Republic
            </Code>{" "}
            and currently residing in {" "}
            <Code className="inline-flex items-center gap-1"> 
                     Morocco
            </Code>, 
            I stay up-to-date with the latest technology trends and adapt quickly to the evolving needs of your business. 
            Additionally, I enjoy creating engaging content on{" "}
              <Link href="https://github.com/Percide07">
                <Code className="inline-flex items-center gap-1"> 
                    <LinkedinIcon size={16} className="inline"/> LinkedIn
                </Code>
              </Link> {" "}.
            </p>
          </div>
          <div className="flex-[2] max-md:m-auto ml-auto">
              <img src={my_face.src} className="w-full h-auto max-w-sm max-md:w-56 rounded-full" alt="percide's picture" />
          </div>
        </Section>
    ); 
}

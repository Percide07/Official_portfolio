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
            <h2 className="font-caption font-bold text-5xl text-primary">Josué HONHONOU</h2>
            <h3 className="text-3xl font-caption ">
              Electronical Engineer and FullStack React / Java Spring Boot
              Developer.
            </h3>
            <p className="text-base">
              I love creating content{" "}
              <Link href="https://github.com/Percide07">
                <Code className="inline-flex items-center gap-1"> 
                    <LinkedinIcon size={16} className="inline"/> Linkedin
                </Code>
              </Link> {" "}

              . I am from &nbsp;
                <Code className="inline-flex items-center gap-1"> 
                    {/* <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Benin.svg/langfr-338px-Flag_of_Benin.svg.png"
                    style={{width:16, height:"auto"  }} 
                    alt="morocco flag"/> {" "} */}
                    Benin Republic
                </Code>.

              I am currently living in&nbsp;
                <Code className="inline-flex items-center gap-1">
                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/langfr-338px-Flag_of_Morocco.svg.png" style={{width:16, height:"auto"  }} alt="morocco flag"/>*/}
                    Morocco
                </Code>.     
              
            </p>
          </div>
          <div className="flex-[2] max-md:m-auto ml-auto">
              <img src={my_face.src} className="w-full h-auto max-w-sm max-md:w-56 rounded-full" alt="percide's picture" />
          </div>
        </Section>
    ); 
}

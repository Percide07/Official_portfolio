import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { ReactIcon } from "./icons/ReactIcon";
import { Code } from "./Code";
import { JavaIcon } from "./icons/JavaIcon";
import { TailwindIcon } from "./icons/TailwindIcon";

export const Skills = () => {
    return (
      <Section className="flex flex-col items-start gap-4">
        <Badge variant={"outline"}>Skills</Badge>
        <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          I love Working on ...
        </h2>
        <div className="flex max-md:flex-col gap-4 ">
          <div className="flex flex-col gap-2 flex-1">
            <ReactIcon
              size={42}
              className="animate-spin"
              style={{ animationDuration: "10s" }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">React</h3>
            <p className="text-sm text-muted-foreground">
              React.js is a powerful <Code>JavaScript</Code> library I enjoy
              using for front-end development. Its component-based architecture
              allows me to build dynamic and responsive user interfaces
              efficiently. With React, I can create{" "}
              <Code>reusable UI components</Code> that enhance code
              maintainability and scalability, making it an essential tool in
              managing my projects.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <JavaIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">
              Java | Spring Boot
            </h3>
            <p className="text-sm text-muted-foreground">
              Spring Boot is a powerful framework for back-end development using
              <Code>Java</Code>. It streamlines application setup and
              configuration, enabling rapid development of scalable services.
              With built-in features like <Code>security and dependency management</Code>, it
              enhances productivity. I enjoy leveraging Spring Boot to create
              robust server-side applications.
            </p>
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindIcon size={42} />
            <h3 className="text-2xl font-semibold tracking-tight">
              Tailwind Css
            </h3>
            <p className="text-sm text-muted-foreground">
              Tailwind CSS is a utility-first CSS framework that promotes <Code>rapid
              UI development</Code>. Its responsive design capabilities allow for
              flexible layouts without the hassle of writing custom styles. I
              appreciate its simplicity and the ability to create visually
              stunning components quickly. Tailwind CSS helps me maintain
              consistency in my projects.
            </p>
          </div>
        </div>
      </Section>
    );
}
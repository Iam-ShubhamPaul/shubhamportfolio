import { BrainCircuit, Briefcase, Cloud, Code, User } from "lucide-react";
import { FaBrain } from "react-icons/fa";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer aspiring to become a skilled MLOps and
              AIOps Engineer.
            </h3>

            <p className="text-muted-foreground">
              I specialize in building responsive, accessible, and
              high-performance web applications through hands-on project
              development using modern technologies.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about crafting elegant solutions to complex
              problems and continuously expanding my knowledge to stay at the
              forefront of the ever-evolving web landscape. Currently, I’m
              learning Artificial Intelligence and Machine Learning to enhance
              my skills for the AI-driven era.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1fOLjbH6xW9JQLDSjAlgBLMgixXVkPYpn/view?usp=sharing"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    I build responsive websites and web applications using
                    modern frameworks such as React.js, Next.js, and Express.js.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud Technologies</h4>
                  <p className="text-muted-foreground">
                    Currently learning AWS and exploring cloud technologies to
                    strengthen my understanding of scalable and distributed
                    systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BrainCircuit className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    MLOps, AIOps, and Automation Tools{" "}
                  </h4>
                  <p className="text-muted-foreground">
                    I am currently learning Artificial Intelligence and Machine
                    Learning to enhance my skill set and contribute to building
                    an AI-driven world through intelligent automation. Alongside
                    model development, I am also focusing on deployment by
                    exploring MLOps, AIOps, and automation tools to deliver
                    scalable, reliable, and efficient AI solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

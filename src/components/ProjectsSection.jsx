import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "SCSDB-MovieApp",
    description: "A beautiful Movie Web-Application using React and Redux",
    image: "/src/image/ChatGPT Image Jul 29, 2025, 09_40_04 PM.png",
    tags: ["React", "TailwindCSS", "Redux"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Full Stack Print On Demand",
    description:
      "Full Stack Print-on-Demand Web Application using some of the most modern and powerful tools in web development",
    image: "/src/image/ChatGPT Image Jul 29, 2025, 09_45_59 PM.png",
    tags: ["TypeScript", "React.js", "Next.js" ,"Tailwind CSS","ImageKit","Strapi"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Eco Chamber",
    description:
      "Implemented a community detection algorithm to analyze echo chambers in social media data.",
    image:
      "/src/image/Echo Chamber Web Interface Design.png",
    tags: ["Python", "Community Detection Algorithm"],
    demoUrl: "#",
    githubUrl: "#",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/Iam-ShubhamPaul"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

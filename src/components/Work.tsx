import ProjectCard from "./ProjectCard";

interface Works {
    imgSrc: string;
    title: string;
    tags: string[];
    projectLink: string;
}

const works: Works[] = [
    {
        imgSrc: "/images/project-1.png",
        title: "Portfolio Website",
        tags: ["React", "TypeScript", "Tailwind"],
        projectLink: "https://github.com/amineElgaini/Portfolio",
    },
    {
        imgSrc: "/images/project-2.png",
        title: "Book Rent App",
        tags: ["React", "Laravel", "API"],
        projectLink: "https://github.com/amineElgaini/Library",
    },
    {
        imgSrc: "/images/project-3.png",
        title: "Driver License App",
        tags: ["C#", "MVC", ".NET"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/project-4.png",
        title: "Blog App",
        tags: ["React", "API"],
        projectLink: "https://github.com/amineElgaini/blogApp",
    },
    {
        imgSrc: "/images/project-5.png",
        title: "Quiz App",
        tags: ["JavaScript", "CSS", "HTML"],
        projectLink: "/",
    },
];

function Work() {
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            key={key}
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            classes={"reveal-up"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Work;

import ProjectCard from "./ProjectCard";

const works = [
    {
        imgSrc: "/images/project-1.jpg",
        title: "Book Rent App",
        tags: ["API", "React", "Laravel"],
        projectLink: "https://musify-5al0.onrender.com/",
    },
    {
        imgSrc: "/images/project-2.jpg",
        title: "Blog App",
        tags: ["React", "API"],
        projectLink: "https://pixstock-official.vercel.app/",
    },
    {
        imgSrc: "/images/project-1.jpg",
        title: "Book Rent App",
        tags: ["API", "React", "Laravel"],
        projectLink: "https://musify-5al0.onrender.com/",
    },
    {
        imgSrc: "/images/project-2.jpg",
        title: "Blog App",
        tags: ["React", "API"],
        projectLink: "https://pixstock-official.vercel.app/",
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

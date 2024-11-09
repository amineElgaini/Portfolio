import SkillCard from "./SkillCard";

interface SkillItem {
    imgSrc: string;
    label: string;
    desc: string;
}

const skillItem: SkillItem[] = [
    {
        imgSrc: "/images/Typescript.png",
        label: "Typescript",
        desc: "Javascript Dev Tool",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Javascript Framework(Library)",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/Laravel.png",
        label: "CSS",
        desc: "Web Server",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "Express.js",
        desc: "Web Server",
    },
    {
        imgSrc: "/images/c-sharp.png",
        label: "C#",
        desc: ".NET Framework",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "No Relational Database",
    },
    {
        imgSrc: "/images/mysql.png",
        label: "MySQL",
        desc: "Relational Database",
    },
    {
        imgSrc: "/images/aws.png",
        label: "AWS",
        desc: "Cloud",
    },
    {
        imgSrc: "/images/docker.png",
        label: "Docker",
        desc: "Containerization Platform",
    },
    {
        imgSrc: "/images/git.png",
        label: "Git",
        desc: "Version Control System",
    },
];
function Skill() {
    return (
        <section className="section text-left">
            <div className="container">
                <h2 className="headline-2 reveal-up">Essential Tools I use</h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover some powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications.
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes={" reveal-up"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skill;

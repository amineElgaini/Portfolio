const aboutItems = [
    {
        label: "Project done",
        number: 12,
    },
    {
        label: "Years of experience",
        number: 3,
    },
];

function About() {
    return (
        <section id="about" className="section text-left">
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
                    <p className="text-zinc-300 mg-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                        I'm a passionate software developer with a strong
                        foundation in web development and expertise in both
                        front-end and back-end technologies, like the MERN
                        stack, and tools like Git and Docker. With hands-on
                        experience in building e-commerce platforms and
                        collaborative team projects, I strive to create
                        efficient, user-friendly applications. My focus is on
                        continuous learning and contributing to innovative
                        solutions, as I aim to grow my skills in dynamic
                        environments.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key}>
                                <div className="flex items-center md:mb-2">
                                    <span className="text-2xl font-semibold md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="text-sky-400 font-demiblod md:text-3xl">
                                        +
                                    </span>
                                </div>
                                <p className="text-sm text-zinc-400">{label}</p>
                            </div>
                        ))}
                        <figure className="img-box w-10 h-10 rounded-full ml-auto">
                            <img
                                className="img-cover"
                                src="/images/my-picture-view.jpg"
                                width={40}
                                height={40}
                                alt="Amine Elgaini"
                            />
                        </figure>
                       
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        A iusto aperiam repellat reprehenderit fugiat,
                        dignissimos cum, ad error officia magnam vero sequi,
                        nostrum cupiditate perspiciatis expedita dolorem quas
                        ipsum nulla.
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
                        <img
                            src="/images/boy.png"
                            alt="Logo"
                            width={30}
                            height={30}
                            className="ml-auto md:w-[40px] md:h-[40px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;

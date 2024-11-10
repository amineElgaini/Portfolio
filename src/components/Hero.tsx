import { ButtonPrimary, ButtonOutline } from "./Button";

function Hero() {
    return (
        <section id="home" className="pt-24 lg:pt-36 text-left">
            <div className="container grid grid-row-2 gap-8 lg:grid lg:grid-cols-2 items-center lg:gap-10">
                <div className="order-1 lg:order-1">
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-full">
                            <img
                                className="img-cover"
                                src="/images/my-picture-view.jpg"
                                width={40}
                                height={40}
                                alt="Amine Elgaini"
                            />
                        </figure>
                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>
                            Available to work
                        </div>
                    </div>

                    <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Modern Websites for the Future
                    </h2>

                    <div className="flex items-center gap-3">
                        <ButtonPrimary
                            label={"Download CV"}
                            icon={"download"}
                        />{" "}
                        <ButtonOutline
                            href={"#about"}
                            label={"Scroll down"}
                            icon={"arrow_downward"}
                        />
                    </div>
                </div>
                <div className="lg:order-2 mx-4">
                    <figure className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[400px] mx-auto lg:ml-auto">
                        <img
                            width={700}
                            height={700}
                            className="w-full ring-8 ring-cyan-600 bg-gray-800/70 hero_image"
                            src="./images/my-picture.png"
                            alt=""
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}

export default Hero;

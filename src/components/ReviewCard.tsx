interface ReviewCardProps {
    content: string;
    name: string;
    imgSrc: string;
    company: string;
}

const ratings: Array<{ icon: string; style: React.CSSProperties }> = new Array(5);
ratings.fill({ icon: "star", style: { fontVariationSettings: '"FILL" 1' } });

function ReviewCard({ content, name, imgSrc, company }: ReviewCardProps) {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">
            <div className="flex items-center gap-1 mb-3">
                {ratings.map(({ icon, style }, key) => (
                    <span
                        key={key}
                        className="material-symbols-rounded text-yellow-300 text-[18px]"
                        style={style}
                    >
                        {icon}
                    </span>
                ))}
            </div>

            <p className="text-zinc-400 mb-8 text-left">{content}</p>

            <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg w-[44px] h-[44px]">
                    <img
                        src={imgSrc}
                        alt={name}
                        width={44}
                        height={44}
                        loading="lazy"
                        className="img-cover"
                    />
                </figure>

                <div className="text-left">
                    <p>{name}</p>
                    <p className="text-xs text-zinc-400 tracking-wider">
                        {company}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;

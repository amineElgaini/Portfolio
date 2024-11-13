interface ButtonProps {
    href?: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
    label: string;
    icon?: string;
    classes?: string;
    download?: boolean;
    downloadFileName?: string;
}

function ButtonPrimary({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
    download = false,
    downloadFileName = "",
}: ButtonProps) {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-primary " + classes}
                {...(download ? { download: "Amine-Elgaini-(CV)" } : {})}
                {...(download ? { download: downloadFileName } : {})}
            >
                {label}{" "}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                ) : undefined}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                ) : undefined}
            </button>
        );
    }
}

function ButtonOutline({
    href,
    target = "_self",
    label,
    icon,
    classes = "",
}: ButtonProps) {
    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={"btn btn-outline " + classes}
            >
                {label}{" "}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                ) : undefined}
            </a>
        );
    } else {
        return (
            <button className={"btn btn-outline " + classes}>
                {label}
                {icon ? (
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        {icon}
                    </span>
                ) : undefined}
            </button>
        );
    }
}

export { ButtonPrimary, ButtonOutline };

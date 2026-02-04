import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    variant?: "default" | "dark" | "light" | "gradient";
    padding?: "sm" | "md" | "lg";
}

export default function Section({
    children,
    className = "",
    id,
    variant = "default",
    padding = "lg",
}: SectionProps) {
    const variantStyles: Record<string, React.CSSProperties> = {
        default: {
            background: "white",
        },
        dark: {
            background: "var(--gradient-hero)",
            color: "white",
        },
        light: {
            background: "var(--color-light)",
        },
        gradient: {
            background: "var(--gradient-primary)",
            color: "white",
        },
    };

    const paddingStyles: Record<string, string> = {
        sm: "3rem 0",
        md: "4rem 0",
        lg: "var(--section-padding) 0",
    };

    return (
        <section
            id={id}
            style={{
                ...variantStyles[variant],
                padding: paddingStyles[padding],
            }}
            className={className}
        >
            <div className="container">{children}</div>
        </section>
    );
}

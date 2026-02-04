import { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
    children: ReactNode;
    href?: string;
    className?: string;
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
}

export default function Card({
    children,
    href,
    className = "",
    padding = "md",
    hover = true,
}: CardProps) {
    const paddingStyles: Record<string, string> = {
        none: "0",
        sm: "1rem",
        md: "1.5rem",
        lg: "2rem",
    };

    const styles: React.CSSProperties = {
        background: "white",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-md)",
        overflow: "hidden",
        transition: "all 0.3s ease",
        padding: paddingStyles[padding],
    };

    const hoverStyles = hover
        ? {
            cursor: "pointer",
        }
        : {};

    const content = (
        <div
            style={{ ...styles, ...hoverStyles }}
            className={`${hover ? "hover-lift" : ""} ${className}`}
        >
            {children}
        </div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}

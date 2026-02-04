import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "white";
    size?: "sm" | "md" | "lg";
    href?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    disabled?: boolean;
    fullWidth?: boolean;
    className?: string;
}

export default function Button({
    children,
    variant = "primary",
    size = "md",
    href,
    type = "button",
    onClick,
    disabled = false,
    fullWidth = false,
    className = "",
}: ButtonProps) {
    const baseStyles: React.CSSProperties = {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        fontFamily: "var(--font-heading)",
        fontWeight: 600,
        borderRadius: "var(--radius-lg)",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "all 0.3s ease",
        border: "none",
        outline: "none",
        opacity: disabled ? 0.6 : 1,
        width: fullWidth ? "100%" : "auto",
    };

    const sizeStyles: Record<string, React.CSSProperties> = {
        sm: { padding: "0.625rem 1.25rem", fontSize: "0.875rem" },
        md: { padding: "0.875rem 1.75rem", fontSize: "1rem" },
        lg: { padding: "1rem 2rem", fontSize: "1.125rem" },
    };

    const variantStyles: Record<string, React.CSSProperties> = {
        primary: {
            background: "var(--gradient-primary)",
            color: "white",
            boxShadow: "var(--shadow-md)",
        },
        secondary: {
            background: "var(--gradient-secondary)",
            color: "white",
            boxShadow: "var(--shadow-md)",
        },
        outline: {
            background: "transparent",
            color: "var(--color-primary)",
            border: "2px solid var(--color-primary)",
        },
        ghost: {
            background: "transparent",
            color: "var(--color-dark)",
        },
        white: {
            background: "white",
            color: "var(--color-primary)",
            boxShadow: "var(--shadow-md)",
        },
    };

    const combinedStyles = {
        ...baseStyles,
        ...sizeStyles[size],
        ...variantStyles[variant],
    };

    if (href) {
        return (
            <a href={href} style={combinedStyles} className={className}>
                {children}
            </a>
        );
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            style={combinedStyles}
            className={className}
        >
            {children}
        </button>
    );
}

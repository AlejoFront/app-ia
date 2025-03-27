import { FC, ReactNode } from 'react'

interface ButtonProps {
    label?: string;
    icon?: ReactNode;
    position?: "top" | "bottom";
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    className?: string;
    [key: string]: any;
}

export const Button: FC<ButtonProps> = ({
    label,
    icon,
    position = "top",
    onClick,
    type = "button",
    disabled = false,
    className = "",
    ...rest
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`btn ${className} ${disabled ? "btn-disabled" : ""}`}
            {...rest}
        >
            {position === "top" && icon && <span className="btn-icon">{icon}</span>}
            {label && <span className="btn-label">{label}</span>}
            {position === "bottom" && icon && <span className="btn-icon">{icon}</span>}
        </button>
    )
}

export default Button
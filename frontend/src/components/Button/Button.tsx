import React from "react";

interface ButtonProps{
    text: string;
    onClick?: () => void;
    //variant?: "primary" | "secondary";
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled}) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default Button;
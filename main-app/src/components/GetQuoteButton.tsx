import React from "react";
import { buttonText } from "@/utils/textVariables";
import { ButtonProps } from "@/utils/typeProps";

export default function GetQuoteButton({ onClick, className }: ButtonProps) {
    return (
        <button
            className={className}
            onClick={onClick}
            >
            {buttonText}
        </button>
    )
}


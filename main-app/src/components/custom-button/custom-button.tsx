import React from "react";
import { ButtonProps } from "./types";

export default function Button({ onClick, className, label }: ButtonProps) {
    return (
        <button
            className={className}
            onClick={onClick}>
            {label}
        </button>
    )
}
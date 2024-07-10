import React from "react";
import { ButtonProps } from "@/utils/typeProps";

export default function ExploreServicesButton({ onClick, className }: ButtonProps) {
    return (
        <button
            className={className}
            onClick={onClick}
            >
            Explore services
        </button>
    )
}
import React from "react";
import Image from "next/legacy/image";
import { UnsrortedListProps } from "./types";

export default function UnsortedList({ className, listItemsNames }: UnsrortedListProps) {
    return (
        <ul className={className}>
            {listItemsNames.map((itemName, index) => (
                <li key={index}>
                    <Image
                        src={"./images/small_listpoint.svg"}
                        alt="slp"
                        width={26}
                        height={26}
                        style={{ marginRight: 10 }}
                    />
                    {itemName}
                </li>
            ))}
        </ul>
    )
}
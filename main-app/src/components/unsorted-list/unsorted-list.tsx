import React from "react";
import Image from "next/image";
import { UnsrortedListProps } from "./types";

export default function UnsortedList({ className, listItemsNames }: UnsrortedListProps) {
    return (
        <ul className={className}>
            {listItemsNames.map((itemName, index) => (
                <li key={index}>
                    <Image
                        src={"./images/small_listpoint.svg"}
                        alt="item of list"
                        width={26}
                        height={26}
                        style={{
                            marginRight: 10,
                            maxWidth: "100%",
                            height: "auto"
                        }} />
                    {itemName}
                </li>
            ))}
        </ul>
    );
}
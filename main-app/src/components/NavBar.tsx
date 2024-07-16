import { NavBarProps } from "@/utils/componentProps";


export default function NavBar({ sectionName, elements }: NavBarProps) {
    return (
        <nav className={`${sectionName}__nav`}>
            <ul className={`${sectionName}__nav_list`}>
                {elements.map((element, index) => (
                    <li key={index} className={`${sectionName}__nav_item`}>
                        <a href={`#${element.toLowerCase()}`}>{element}</a>
                    </li>
                ))}
            </ul>            
        </nav>
    )
}
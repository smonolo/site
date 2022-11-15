import Link from "next/link";

import { StyledProject } from "./styles";

import { ProjectProps } from "./types";

export default function Project(props: ProjectProps) {
    return (
        <StyledProject>
            <div className='flex'>
                <div className='name'>{props.name}</div>
                <div className='description'>{props.description}</div>
            </div>
            <div className='flex'>
                {props.links.map((link, index) => (
                    <Link key={index} href={link}>
                        <div>
                            {link.replace('https://', '')} <i className='bi bi-arrow-right' />
                        </div>
                    </Link>
                ))}
            </div>
        </StyledProject>
    );
}
import Link from "next/link";

import { StyledEmail } from "./styles";

import { EmailProps } from "./types";

export default function Email(props: EmailProps) {
    return (
        <StyledEmail>
            {props.email}
            <Link href={`mailto:${props.email}`}>
                <div className='button'>
                    <i className='bi bi-envelope' /> Send email
                </div>
            </Link>
        </StyledEmail>
    );
}
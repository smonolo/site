import Link from "next/link";

import { StyledEmail } from "./styles";

import { EmailProps } from "./types";

export default function Email(props: EmailProps) {
    return (
        <StyledEmail>
            {props.email}
            <Link href={`mailto:${props.email}`}>
                <div className='button'>
                    Send email <i className='bi bi-arrow-right' />
                </div>
            </Link>
        </StyledEmail>
    );
}
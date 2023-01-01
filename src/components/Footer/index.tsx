import { StyledRow } from "./styles";

import info from '../../../package.json';

export default function Footer() {
    return (
        <StyledRow>
            <div>© Stefano Monolo. Partita IVA IT11729910965</div>
            <a href={info.repository} target='_blank'>
                <i className='bi bi-github' /> View on GitHub
            </a>
        </StyledRow>
    );
}
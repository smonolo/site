import Link from "next/link";
import { useRouter } from "next/router";

import { StyledGrid } from "./styles";

import data from '../../data/header.json';

export default function Header() {
    const router = useRouter();

    const { items, socials } = data;

    return (
        <StyledGrid>
            <div className='flex'>
                <Link href='/'>
                    <img
                        src='https://cdn.smnl.it/VfxwQAzSdd.png'
                        alt='Logo'
                        draggable={false}
                    />
                </Link>
            </div>
            <div className='flex'>
                {items.map(({ text, path }) => (
                    <Link
                        key={'item-' + text.toLowerCase()}
                        href={path}
                    >
                        <div className={`item ${router.asPath === path ? 'active' : ''}`}>
                            {text}
                        </div>
                    </Link>
                ))}
            </div>
            <div className='flex'>
                {socials.map(({ icon, url }) => (
                    <a
                        key={'social-' + icon.replace('bi bi-', '')}
                        href={url}
                        target='_blank'
                    >
                        <i className={icon + ' item'} />
                    </a>
                ))}
            </div>
        </StyledGrid>
    );
}
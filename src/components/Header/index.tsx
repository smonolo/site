import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { StyledGrid } from "./styles";

import { Social } from "./types";
import { supabase } from "@lib/supabase";

import data from '@data/header.json';

export default function Header() {
    const [socials, setSocials] = useState<Social[]>([]);
    const [error, setError] = useState<boolean>(false);

    const router = useRouter();

    const { items } = data;

    useEffect(() => {
        fetchSocials();
    }, []);

    const fetchSocials = async () => {
        const { data, error: err } = await supabase.from('socials').select();

        if (err) {
            return setError(true);
        }

        setSocials(data);
    };

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
                {error && <div className='error no-top'>Could not load socials</div>}
                {socials.map(({ icon, url }) => (
                    <a
                        key={'social-' + icon.replace('bi bi-', '')}
                        href={url}
                        target='_blank'
                    >
                        <i className={'bi bi-' + icon + ' item'} />
                    </a>
                ))}
            </div>
        </StyledGrid>
    );
}
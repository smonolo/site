import Link from "next/link";
import { Fragment } from "react";

import Card from "@components/Card";

export default function Home() {
    const years = new Date().getFullYear() - 2016;

    return (
        <Fragment>
            <div className='title'>Hello</div>
            <Card>
                <div className='card-title'>Me</div>
                <div className='top'>
                    I'm a frontend engineer at EVNT. Co-founder & CEO of Breeng.
                    Previously at ESL Gaming Online for Badlion Client, Medal.tv for Top.gg and Moonsworth.
                </div>
                <div className='top'>
                    I started building websites {years} years ago. Unfortunately, the first ever
                    website I made is not online anymore.
                </div>
                <div className='top'>
                    <Link href='/contact'>
                        Get in touch <i className='bi bi-arrow-right' />
                    </Link>
                </div>
            </Card>
        </Fragment>
    );
}
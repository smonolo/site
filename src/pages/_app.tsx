import { AppProps } from 'next/app';
import { Fragment } from 'react';

import Header from '@components/Header';
import Footer from '@components/Footer';

import '@styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Fragment>
            <div className='container'>
                <Header />
                <Component {...pageProps} />
            </div>
            <div className='container'>
                <Footer />
            </div>
        </Fragment>
    );
}
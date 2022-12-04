import { AppProps } from 'next/app';
import { Fragment } from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';

import '../styles/global.css';

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
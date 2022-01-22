import Head from 'next/head';
import '../styles/tailwind.css';
const qsRemit = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    http-equiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default qsRemit;

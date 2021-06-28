import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../globalStyles';
import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>CallBus Project</title>
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </>
    )
}

export default wrapper.withRedux(App);

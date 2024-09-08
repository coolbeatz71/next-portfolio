import { AppProps } from 'next/app';
import { Router } from 'next/router';
import NProgress from 'nprogress';
import dayjs from 'dayjs';
import { IUnknownObject } from '@/interfaces/app';

import locales from '@/locales';
import { useMemo } from 'react';
import { getLanguage } from '@/helpers/getLanguage';
import relativeTime from 'dayjs/plugin/relativeTime';

import '@/styles/global.scss';

type AppPropsWithError = AppProps & { err: unknown } & IUnknownObject;

const config = {
    speed: 800,
    easing: 'ease',
    trickle: false,
};

const nProgress = NProgress.configure(config);

Router.events.on('routeChangeStart', () => nProgress.set(0.9).start());
Router.events.on('routeChangeComplete', () => {
    window.scroll({
        top: 0,
        left: 0,
    });
    nProgress.done();
});
Router.events.on('routeChangeError', () => nProgress.done());

const MyApp = ({ Component, pageProps, serverProps }: AppPropsWithError): JSX.Element => {
    const userLang = getLanguage();

    const initLanguage = (lang: string): void => {
        locales.changeLanguage(lang);
        dayjs.locale(lang);
    };

    useMemo(() => {
        dayjs.extend(relativeTime);
        initLanguage(userLang as string);
    }, [userLang]);

    return <Component {...pageProps} serverProps={serverProps} />;
};

export default MyApp;

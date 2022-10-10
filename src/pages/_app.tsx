import '../common/styles/globals.css';
import type { AppType } from 'next/app';
import type { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { Flowbite } from 'flowbite-react';

const MyApp: AppType<{ session: Session | null }> = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    return (
        <SessionProvider>
            <Flowbite>
                <Component {...pageProps} />
            </Flowbite>
        </SessionProvider>
    );
};

export default MyApp;

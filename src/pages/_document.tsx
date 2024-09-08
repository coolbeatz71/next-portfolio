import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
                        as="style"
                    />
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;700;900&display=swap"
                        as="style"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

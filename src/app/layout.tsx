import {Inter} from 'next/font/google'
import './globals.css'
import Header from "@/app/_components/Header";
import Footer from "@/app/_components/Footer";
import Container from "@/app/_components/Container";
import Head from 'next/head'

export const metadata = {
    metadataBase: new URL('https://hyperui.dev'),
    title: 'Sudipta Kumar Paik',
    description: 'Free Tailwind CSS components that can be used in your next project.',
    openGraph: {
        title: 'Free Open Source Tailwind CSS Components | HyperUI',
        description: 'Free Tailwind CSS components that can be used in your next project.',
        url: 'https://www.hyperui.dev/',
        siteName: 'HyperUI',
        type: 'website',
        images: ['https://www.hyperui.dev/og.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Open Source Tailwind CSS Components | HyperUI',
        description: 'Free Tailwind CSS components that can be used in your next project.',
    },
}

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({children,}: { children: React.ReactNode }) {
    return (
        <html className="h-full scroll-smooth" lang="en" dir="ltr">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <link rel="icon" href="/favicon.svg" type="image/svg+xml"/>
            </Head>
            <body className={`${inter.variable} font-sans antialiased`}>
                <Container classNames="">
                    <Header/>
                    <main className="bg-white">{children}</main>
                    <Footer/>
                </Container>
            </body>
        </html>
    )
}
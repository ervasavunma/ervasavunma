import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    const { t, lang } = useTranslation()
    return (
        <div>
            <Head>
                <title>{t('footer:companyName').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
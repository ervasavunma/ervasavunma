import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import GetInTouch from '../components/GetInTouch'
import Layout from '../components/Layout'
import WhatsAppWidget from '../components/WhatsAppWidget'

const Contact = () => {
    const { t, lang } = useTranslation()

    return (
        <Layout>
            <WhatsAppWidget />
            <div className='w-full py-20 corporate-top-image'>
                <div className='w-full m-auto max-w-[1200px] px-4 mt-10'>
                    <h1 className='text-5xl mb-3 font-black text-white'>{t('corporate:topTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                </div>
            </div>
            <GetInTouch />
        </Layout>
    )
}

export default Contact
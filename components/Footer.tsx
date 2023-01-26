import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const { t, lang } = useTranslation()

    return (
        <>
            <div className='bg-gray-100 w-full py-16'>
                <div className='flex justify-between w-full max-w-[800px] m-auto px-4'>
                    <div>
                        <h2 className='text-2xl font-bold mb-3'>{t('footer:sitemap').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h2>
                        <div className='flex flex-col border-l border-solid border-gray-300'>
                            <Link href="/" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem1').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/corporate" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem2').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/capabilities" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem3').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/certificates" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem4').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/machinery" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem5').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/photo-gallery" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem6').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                            <Link href="/contact" className='relative pl-[30px] footer-list-item mb-2 hover:text-red-900'>
                                {t('footer:sitemapItem7').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            </Link>
                        </div>
                    </div>
                    <div className='ml-10'>
                        <h2 className='text-2xl font-bold mb-3'>{t("footer:contactInformation").toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h2>
                        <ul className='max-w-[300px]'>
                            <li className='mb-2'>
                                {t("footer:contactInformationAddress")}
                            </li>
                            <li className='mb-2'>
                                info@ervasavunma.com
                            </li>
                            <li className='mb-2'>
                                {t("footer:contactInformationPhone")} : +90 (532) 659 37 82
                            </li>
                            {
                                /*
                                <li className='mb-2'>
                                    {t("footer:contactInformationFax")} : +90 (532) 659 37 82
                                </li>
                                */
                            }

                        </ul>

                    </div>
                </div>
            </div>
            <div className='text-white flex items-center justify-center h-10 w-full bg-red-700'>
                © {t('footer:companyName').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
            </div>
        </>
    )
}

export default Footer
import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Layout from '../components/Layout'
import Certificate1 from '../public/assets/images/certificate-1.png'
import Certificate2 from '../public/assets/images/certificate-2.png'
import Certificate3 from '../public/assets/images/certificate-3.png'
import Image from 'next/image'

const Certificates = () => {
    const { t, lang } = useTranslation()

    return (
        <Layout>
            <div className='w-full py-20'>
                <div className='w-full max-w-[1200px] m-auto px-4'>
                    <h1 className='text-center font-black text-4xl mb-10'>{t('certificates:certificateTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                    <div className='w-full flex flex-wrap justify-center gap-16'>
                        <Image
                            alt='certificate-img'
                            width={250}
                            src={Certificate1}
                            className="cursor-pointer duration-300 ease-in transition-all hover:scale-125"
                        />
                        <Image
                            alt='certificate-img'
                            width={250}
                            src={Certificate2}
                            className="cursor-pointer duration-300 ease-in transition-all hover:scale-125"
                        />
                        <Image
                            alt='certificate-img'
                            width={250}
                            src={Certificate3}
                            className="cursor-pointer duration-300 ease-in transition-all hover:scale-125"

                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Certificates
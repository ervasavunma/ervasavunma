import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import Capability1 from '../assets/images/machinery-park-1.jpg'
import Capability2 from '../assets/images/machinery-park-2.jpg'
import Capability3 from '../assets/images/machinery-park-3.jpg'

import Image from 'next/image'

const Capabilities = () => {
    const { t, lang } = useTranslation()
    const [capability, setCapability] = useState(1)

    return (
        <Layout>
            <div className='w-full capabilities-top-image' />
            <div className='w-full py-20'>
                <div className='flex md:flex-col w-full m-auto max-w-[1200px] px-4'>
                    <div className='flex flex-col md:mb-10'>
                        <button className={`mb-4 py-3 w-52 md:w-full  hover:bg-red-700 text-white duration-200 transition-colors ease-in ${capability === 1 ? 'bg-red-700' : 'bg-red-900'}`} onClick={() => setCapability(1)}>{t('capabilities:manufacturing').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</button>
                        <button className={`mb-4 py-3 w-52 md:w-full  hover:bg-red-700 text-white duration-200 transition-colors ease-in ${capability === 2 ? 'bg-red-700' : 'bg-red-900'}`} onClick={() => setCapability(2)}>{t('capabilities:assembly').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</button>
                        <button className={`mb-4 py-3 w-52 md:w-full  hover:bg-red-700 text-white duration-200 transition-colors ease-in ${capability === 3 ? 'bg-red-700' : 'bg-red-900'}`} onClick={() => setCapability(3)}>{t('capabilities:qualityControl').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</button>
                    </div>
                    <div className='ml-16 md:ml-0'>
                        {capability === 1 ? <h1 className='text-4xl mb-6 font-black'>{t('capabilities:manufacturingTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1> : null}
                        {capability === 2 ? <h1 className='text-4xl mb-6 font-black'>{t('capabilities:assemblyTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1> : null}
                        {capability === 3 ? <h1 className='text-4xl mb-6 font-black'>{t('capabilities:qualityControl').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1> : null}

                        {capability === 1 ? <div className='mb-3'>
                            <p>{t('capabilities:manufacturingText1')}</p>
                            <p className='my-5'>{t('capabilities:manufacturingText2')}</p>
                            <p>{t('capabilities:manufacturingText3')}</p>
                        </div> : null}
                        {capability === 2 ? <p className='mb-3'>{t('capabilities:assemblyText').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</p> : null}
                        {capability === 3 ? <p className='mb-3'>{t('capabilities:qualityControlText').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</p> : null}

                        {capability === 1 ? <Image className=' mt-20 object-cover h-[30rem] w-full' src={Capability1} alt='capabilites-image' /> : null}
                        {capability === 2 ? <Image className=' mt-20 object-cover h-[30rem] w-full' src={Capability2} alt='capabilites-image' /> : null}
                        {capability === 3 ? <Image className=' mt-20 object-cover h-[30rem] w-full' src={Capability3} alt='capabilites-image' /> : null}
                    </div>


                </div>
            </div>
        </Layout>
    )
}

export default Capabilities
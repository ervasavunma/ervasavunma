import React from 'react'
import Layout from '../components/Layout'
import Photo1 from '../public/assets/images/photo-galery-1.jpeg'
import Photo2 from '../public/assets/images/photo-galery-2.jpeg'
import Photo3 from '../public/assets/images/photo-galery-3.jpg'
import Photo4 from '../public/assets/images/photo-galery-4.jpg'
import Photo5 from '../public/assets/images/photo-galery-5.jpg'
import Photo6 from '../public/assets/images/photo-galery-6.jpg'

import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

const PhotoGallery = () => {
    const { t, lang } = useTranslation()

    return (
        <Layout>
            <div className='w-full py-20'>
                <div className='w-full max-w-[1200px] px-4 m-auto'>
                    <h1 className='mb-16 text-center text-4xl font-black'>{t('header:photo-gallery').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                    <div className='w-full flex flex-wrap gap-10 justify-center'>
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo1} alt='photo-gallery-image' />
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo2} alt='photo-gallery-image' />
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo3} alt='photo-gallery-image' />
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo4} alt='photo-gallery-image' />
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo5} alt='photo-gallery-image' />
                        <Image priority className='hover:scale-110 duration-200 ease-in transition-all mb-4 w-[420px] h-full max-h-[280px] object-cover' src={Photo6} alt='photo-gallery-image' />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PhotoGallery
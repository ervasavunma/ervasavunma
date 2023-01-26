import React from 'react'
import Layout from '../components/Layout'

import MachineryParkImage1 from '../public/assets/images/machinery-park-1.jpg'
import MachineryParkImage2 from '../public/assets/images/machinery-park-2.jpg'
import MachineryParkImage3 from '../public/assets/images/machinery-park-3.jpg'
import MachineryParkImage4 from '../public/assets/images/machinery-park-4.jpg'
import MachineryParkImage5 from '../public/assets/images/machinery-park-5.jpg'
import MachineryParkImage6 from '../public/assets/images/machinery-park-6.jpg'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'


const Machinery = () => {
    const { t, lang } = useTranslation()

    return (
        <Layout>
            <div className='w-full py-20 '>
                <div className='w-full max-w-[1200px] m-auto px-4'>
                    <h1 className='mb-16 text-center text-4xl font-black'>{t('machinery:machineryTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                    <div className='flex flex-wrap gap-10 justify-center'>
                        <div className='h-full '>
                            <Image className='mb-4 w-[420px] h-full max-h-[280px] object-cover' src={MachineryParkImage6} alt='machiner-park-img' />
                            <h4 className='text-lg font-semibold text-red-900'>HISION GLUe 18x30 </h4>
                            <p>3 AXIS</p>
                            <p>8.000 RPM</p>
                            <p>2022</p>
                            <p>3100x1750x1000 MM</p>
                        </div>
                        <div className='h-full '>
                            <Image priority className='mb-4 w-[420px] h-full max-h-[280px] object-cover' src={MachineryParkImage1} alt='machiner-park-img' />
                            <h4 className='text-lg font-semibold text-red-900'>HISION VMC1000 II </h4>
                            <p>4 AXIS</p>
                            <p>12.000 RPM</p>
                            <p>2021</p>
                            <p>1000x600x700 MM</p>
                        </div>
                        <div className='h-full '>
                            <Image className='mb-4 w-[420px] h-full max-h-[280px] object-cover' src={MachineryParkImage2} alt='machiner-park-img' />
                            <h4 className='text-lg font-semibold text-red-900'>TOPPER TMV1050</h4>
                            <p>3 AXIS</p>
                            <p>8.000 RPM</p>
                            <p>2017</p>
                            <p>1050x600x600 MM</p>
                        </div>
                        <div className='h-full'>
                            <Image className='mb-4 w-[420px] h-full max-h-[280px] object-cover' src={MachineryParkImage3} alt='machiner-park-img' />
                            <h4 className='text-lg font-semibold text-red-900'>ARION IMM600</h4>
                            <p>3 AXIS</p>
                            <p>10.000 RPM</p>
                            <p>2018</p>
                            <p>600x500x600 MM</p>
                        </div>
                    </div>

                </div>

            </div>
        </Layout>
    )
}

export default Machinery
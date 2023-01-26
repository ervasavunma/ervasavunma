import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import Layout from '../components/Layout'
import ListItem from '../components/ListItem'
import WorkingSpaceImage from '../public/assets/images/working-space.avif'
import MeetingImage from '../public/assets/images/meeting.avif'
import QualityControlImage from '../public/assets/images/quality-control.avif'
import Image from 'next/image'
import GetInTouch from '../components/GetInTouch'
import WhatsAppWidget from '../components/WhatsAppWidget'

const Corporate = () => {
    const { t, lang } = useTranslation()

    return (
        <Layout>
            <WhatsAppWidget />
            <div className='w-full py-20 corporate-top-image'>
                <div className='w-full m-auto max-w-[1200px] px-4 mt-10'>
                    <h1 className='text-5xl mb-3 font-black text-white'>{t('corporate:topTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                </div>
            </div>
            <div className='w-full py-20'>
                <div className='w-full max-w-[1200px] m-auto px-4 flex flex-col'>
                    <h3 className='text-center text-4xl font-bold mb-8'>{t('corporate:aboutTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h3>
                    <div className='w-full max-w-[800px] m-auto'>
                        <p className='mb-6'>{t('corporate:aboutText1')}</p>
                        <p className='mb-6'>{t('corporate:aboutText2')}</p>
                        <p className='mb-6'>{t('corporate:aboutText1')}</p>
                    </div>
                </div>
            </div>
            <div className='w-full py-20 bg-gray-100'>
                <div className='w-full max-w-[1200px] m-auto px-4'>
                    <h1 className='text-4xl text-center font-bold mb-8'>{t('corporate:vissionMissionTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
                    <div className='flex justify-between sm:flex-col sm:justify-center sm:items-center'>
                        <div className='w-full max-w-[400px] sm:mb-7'>
                            <h5 className='mb-3 text-2xl font-semibold text-center'>{t('corporate:vissionMissionVissionTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h5>
                            <p className='text-center'>{t('corporate:vissionMissionVissionText')}</p>
                        </div>
                        <div className='w-full max-w-[400px]'>
                            <h5 className='mb-3 text-2xl font-semibold text-center'>{t('corporate:vissionMissionMissionTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h5>
                            <p className='text-center'>{t('corporate:vissionMissionMissionText')}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full py-20'>
                <div className='flex lg:flex-col w-full max-w-[1200px] px-4 m-auto'>
                    <div className='w-full max-w-xs flex flex-col lg:items-center lg:max-w-full lg:mb-10'>
                        <h5 className='mb-4 lg:text-3xl pl-[22px] text-2xl font-bold'>{t('corporate:ourValuesTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h5>
                        <div className='flex flex-col'>
                            <ListItem name={t('corporate:ourValues1').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                            <ListItem name={t('corporate:ourValues2').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                            <ListItem name={t('corporate:ourValues3').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                        </div>
                    </div>
                    <div className='w-full md:flex-col lg:items-center flex justify-between'>
                        <Image className='h-[220px] mr-5 md:mr-0 md:mb-10' width={400} src={WorkingSpaceImage} alt='working-space' />
                        <Image className='h-[220px]' width={400} src={MeetingImage} alt='meeting' />
                    </div>
                </div>
            </div>

            {
                /*
            <div className='w-full py-20 bg-gray-100'>
                <div className='w-full max-w-[1200px] px-4 m-auto flex justify-between md:flex-col md:items-center'>
                    <div className='md:mb-10'>
                        <h5 className='mb-4 pl-[22px] text-2xl font-bold'>{t('corporate:qualityPolicyTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h5>
                        <div className='flex flex-col w-full max-w-2xl'>
                            <ListItem name={t('corporate:qualityPolicy1').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                            <ListItem name={t('corporate:qualityPolicy2').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                            <ListItem name={t('corporate:qualityPolicy3').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                            <ListItem name={t('corporate:qualityPolicy4').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                        </div>
                    </div>
                    <div className='ml-10 md:ml-0'>
                        <Image className='h-[220px]' width={400} src={QualityControlImage} alt='quality-control' />
                    </div>
                </div>
            </div>
            */
            }
            <GetInTouch />
        </Layout>
    )
}

export default Corporate
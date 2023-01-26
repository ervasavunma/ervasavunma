import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout'
import Image from 'next/image'
import ProdcutionIcon from '../public/assets/images/production.png'
import AssembyIcon from '../public/assets/images/assembly.png'
import QualityControlIcon from '../public/assets/images/quality-control.png'
import VideoPlay from '../public/assets/svgs/VideoPlay'
import MachineryParkImage1 from '../public/assets/images/machinery-park-5.jpg'
import MachineryParkImage2 from '../public/assets/images/machinery-park-1.jpg'
import MachineryParkImage3 from '../public/assets/images/machinery-park-3.jpg'
import MachineryParkImage4 from '../public/assets/images/machinery-park-2.jpg'

import ListItem from '../components/ListItem'
import AselsanLogo from '../public/assets/images/aselsan.png'
import WhatsAppWidget from '../components/WhatsAppWidget'

export default function Home() {
  const { t, lang } = useTranslation()

  return (
    <Layout>
      <WhatsAppWidget />
      <div className='homepage-top-image '>
        <div className='flex items-center w-full max-w-[1200px] h-full mx-auto px-4 relative'>
          <h1 className='text-white pb-16 text-5xl sm:text-4xl font-semibold'>{t('home:topImageTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
          <div className='absolute bottom-20 md:right-8 right-32'>
            <Link href="/corporate" className='duration-300 ease-in transition-colors px-4 py-3 bg-red-900 border-red-900 border-solid border text-white hover:bg-red-700'>{t('home:moreInfo').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
            <Link href="/contact" className='duration-300 ease-in transition-colors text-white ml-4 px-4 py-3 border border-white border-solid hover:bg-gray-200 hover:border-gray-200 hover:text-gray-700'>{t('home:contact').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
          </div>
        </div>
      </div>
      <div className='w-full py-20'>
        <div className='flex md:flex-col md:justify-center md:items-center justify-between w-full max-w-[1200px] m-auto px-4'>
          <div className='flex flex-col items-start md:items-center md:mb-10 w-full max-w-xs md:max-w-md'>
            <h1 className='text-4xl mb-4 font-black'>{t("home:capabilitiesTitle").toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
            <p>{t("home:capabilitiesText")}</p>
          </div>
          <div className='w-full max-w-lg'>
            <div className='flex items-center mb-6'>
              <Image width={60} height={60} src={ProdcutionIcon} alt='production' className='mr-4' />
              <div>
                <h6 className='text-2xl font-black'>{t('home:productionTitle')}</h6>
                <Link className='text-red-900 hover:text-red-600' href="/capabilities">{t('home:productionText')}</Link>
              </div>
            </div>
            <div className='flex items-center mb-6 justify-end'>
              <Image width={40} height={40} src={QualityControlIcon} alt='production' className='mr-4' />
              <div>
                <h6 className='text-2xl font-black'>{t('home:qualityControlTitle')}</h6>
                <Link className='text-red-900 hover:text-red-600' href="/capabilities">{t('home:qualityControlText')}</Link>
              </div>
            </div>
            <div className='flex items-center'>
              <div className='w-[60px] mr-4 pl-2'>
                <Image width={50} height={50} src={AssembyIcon} alt='production' className='' />
              </div>
              <div>
                <h6 className='text-2xl font-black'>{t('home:assemblyTitle')}</h6>
                <Link className='text-red-900 hover:text-red-600' href="/capabilities">{t('home:assemblyText')}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='homepage-promotion-video flex flex-col items-center justify-center'>
        <h1 className='text-6xl sm:text-4xl text-white font-black max-w-xl text-center mb-3'>{t('home:videoTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
        <button className='hover:scale-110'>
          <VideoPlay width='80px' height='80px' color='#fff' />
        </button>
      </div>
      <div className='w-full py-20'>
        <div className='w-full max-w-[1200px] m-auto px-4'>
          <div className='flex sm:flex-col flex-row justify-between items-center mb-16'>
            <h2 className='text-4xl sm:mb-4 font-black'>{t('home:machineryParkTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h2>
            <p className='max-w-lg md:text-center ml-8'>{t('home:machineryParkText').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</p>
          </div>
          <div className='flex sm:justify-center flex-wrap justify-between items-center gap-4'>
            <div className='w-full max-w-[280px] ease-in duration-200 transition-all cursor-pointer hover:scale-110'>
              <Image className='h-[220px] object-cover w-[300px]' src={MachineryParkImage1} alt='machinery-park-image' />
              <div className='w-full bg-gray-100 px-6 py-8'>
                <h6 className='text-lg font-semibold mb-2'>{t('home:machineryParkItem1Title').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h6>
                <Link href="/machinery" className='text-sm hover:text-red-700'>{t('home:machineryParkLinkButton').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
              </div>
            </div>
            <div className='ease-in max-w-[280px] duration-200 transition-all cursor-pointer hover:scale-110'>
              <Image className='h-[220px] object-cover w-[300px]' src={MachineryParkImage2} alt='machinery-park-image' />
              <div className='w-full bg-gray-100 px-6 py-8'>
                <h6 className='text-lg font-semibold mb-2'>{t('home:machineryParkItem2Title').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h6>
                <Link href="/machinery" className='text-sm hover:text-red-700'>{t('home:machineryParkLinkButton').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
              </div>
            </div>
            <div className='ease-in max-w-[280px] duration-200 transition-all cursor-pointer hover:scale-110'>
              <Image className='h-[220px] object-cover w-[300px]' src={MachineryParkImage3} alt='machinery-park-image' />
              <div className='w-full bg-gray-100 px-6 py-8'>
                <h6 className='text-lg font-semibold mb-2'>{t('home:machineryParkItem3Title').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h6>
                <Link href="/machinery" className='text-sm hover:text-red-700'>{t('home:machineryParkLinkButton').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
              </div>
            </div>
            <div className='ease-in max-w-[280px] duration-200 transition-all cursor-pointer hover:scale-110'>
              <Image className='h-[220px] object-cover w-[300px]' src={MachineryParkImage4} alt='machinery-park-image' />
              <div className='w-full bg-gray-100 px-6 py-8'>
                <h6 className='text-lg font-semibold mb-2'>{t('home:machineryParkItem4Title').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h6>
                <Link href="/machinery" className='text-sm hover:text-red-700'>{t('home:machineryParkLinkButton').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full py-20 md:py-10 hidden'>
        {/* WORKING WITH WHICH COMPANIES' NAMES WILL OPEN LATER  */}
        <div className='flex sm:flex-wrap sm:items-start justify-between w-full max-w-[1200px] m-auto px-4'>
          <div className='sm:mb-4'>
            <h6 className='mb-2 text-xl font-bold text-red-900'>{t('home:headquorter').toLocaleUpperCase(`${lang}-${lang.toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}`)}</h6>
            <p className='font-medium'>{t('home:headquorterText').toLocaleUpperCase(`${lang}-${lang.toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}`)}</p>
          </div>
          <div className='sm:mx-6 sm:mb-4'>
            <h6 className='ml-[23px] mb-2 text-xl font-bold text-red-900'>{t('home:domestic').toLocaleUpperCase(`${lang}-${lang.toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}`)}</h6>
            <ul>
              <li className='mb-1 flex'>
                <ListItem name="ASELSAN" />
              </li>
              <li className='mb-1 flex'>
                <ListItem name="TAI" />
              </li>
              <li className='mb-1 flex'>
                <ListItem name="FNSS" />
              </li>
              <li className='mb-1 flex'>
                <ListItem name="ROKETSAN" />
              </li>
            </ul>
          </div>
          <div className='hidden'>
            <h6 className='ml-[23px] mb-2 text-xl font-bold text-red-900'>{t('home:overseas').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h6>
            <ul>
              <li className='mb-1 flex'>
                <ListItem name={t('home:overseas1')} />
              </li>
              <li className='mb-1 flex'>
                <ListItem name={t('home:overseas2')} />
              </li>
            </ul>
          </div>
          <div className='md:hidden'>
            <h1 className='text-3xl font-black'>{t('home:internationalExperiences').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h1>
          </div>
        </div>
      </div>
      <div className='w-full hidden'>
        {/* COMPANY LOGOS SLIDER WILL OPEN LATER  */}
        <div className='flex w-full max-w-[1200px] m-auto px-4 py-20 overflow-hidden '>
          <div className='homepage-logos-wrapper'>
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />

            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
            <Image className='px-8 homepage-logo' width={200} src={AselsanLogo} alt='company-logo' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

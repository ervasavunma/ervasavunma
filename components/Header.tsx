import React, { useState } from 'react'
import PhoneIcon from '../assets/svgs/Phone'
import EmailIcon from '../assets/svgs/Email'
import useTranslation from 'next-translate/useTranslation'
import setLanguage from 'next-translate/setLanguage'
import USAFlag from '../assets/images/usa-flag.png'
import TurkeyFlag from '../assets/images/turkey-flag.png'
import Logo from '../assets/images/logo.jpeg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Drawer } from 'antd'
import MenuIcon from '../assets/svgs/Menu'

const Header = () => {
    const { t, lang } = useTranslation()
    const { pathname } = useRouter()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    return (
        <div>
            <div className='flex items-center bg-zinc-800	py-1 h-9'>
                <div className='flex items-center justify-between mx-auto w-full h-full max-w-[1200px] px-4'>
                    <div className='flex items-center h-full'>
                        <span className='flex items-center justify-center'>
                            <PhoneIcon color='#fff' width='12px' height='12px' />
                            <p className='text-xs ml-2 text-white'>+90 (532) 659 37 82</p>
                        </span>
                        <span className='bg-white mx-2 w-[10px] h-[1px]' />
                        <span className='flex items-center justify-center'>
                            <EmailIcon color='#fff' width='12px' height='12px' />
                            <p className='text-xs ml-2 text-white'>info@ervasavunma.com</p>
                        </span>
                    </div>
                    <button onClick={async () => await setLanguage(lang === 'tr' ? 'en' : 'tr')} className='text-white'>
                        {
                            lang === 'tr' ? <span className='flex items-center'>
                                <Image className='w-[16px] h-[16px]' src={USAFlag} alt='flag' />
                                <span className='ml-1 text-sm'>EN</span>
                            </span> : <span className='flex items-center'>
                                <Image className='w-[16px] h-[16px]' src={TurkeyFlag} alt='flag' />
                                <span className='ml-1 text-sm'>TR</span>
                            </span>
                        }
                    </button>
                </div>
            </div>

            <div className='w-full h-16 md:h-12 flex items-center'>
                <div className='flex w-full h-16 md:h-10 md:justify-between max-w-[1200px] px-4 bg-white mx-auto'>
                    <Image src={Logo} alt="logo" className='h-12 my-auto w-[200px] md:w-[150px] md:h-10' />
                    <div className='flex items-center ml-2 md:hidden'>
                        <Link href="/" className={` transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:homepage")}</Link>
                        <Link href="/corporate" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/corporate' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:corporate")}</Link>
                        <Link href="/capabilities" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/capabilities' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:capabilities")}</Link>
                        <Link href="/certificates" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/certificates' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:certificates")}</Link>
                        <Link href="/machinery" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/machinery' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:machinery")}</Link>
                        <Link href="/photo-gallery" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/photo-gallery' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:photo-gallery")}</Link>
                        <Link href="/contact" className={`transition-colors duration-300 ease-in h-full px-4 flex items-center justify-center hover:bg-red-800 hover:text-white ${pathname === '/contact' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:contact")}</Link>
                    </div>
                    <div className='hidden md:flex'>
                        <button onClick={() => setIsDrawerOpen(true)}>
                            <MenuIcon color='#7f1d1d' />
                        </button>
                    </div>
                </div>
            </div>
            <Drawer
                width="350px"
                placement='right'
                closable={false}
                onClose={() => setIsDrawerOpen(false)}
                open={isDrawerOpen}
                key='right' >
                <div className='mb-10'>
                    <Image width={180} src={Logo} alt='company-logo' />
                </div>
                <div className='flex flex-col'>
                    <Link href="/" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in hover:bg-red-800 hover:text-white ${pathname === '/' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:homepage")}</Link>
                    <Link href="/corporate" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in hover:bg-red-800 hover:text-white ${pathname === '/corporate' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:corporate")}</Link>
                    <Link href="/capabilities" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in  hover:bg-red-800 hover:text-white ${pathname === '/capabilities' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:capabilities")}</Link>
                    <Link href="/certificates" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in  hover:bg-red-800 hover:text-white ${pathname === '/certificates' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:certificates")}</Link>
                    <Link href="/machinery" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in  hover:bg-red-800 hover:text-white ${pathname === '/machinery' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:machinery")}</Link>
                    <Link href="/photo-gallery" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in  hover:bg-red-800 hover:text-white ${pathname === '/photo-gallery' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:photo-gallery")}</Link>
                    <Link href="/contact" className={`px-2 text-xl mb-3 transition-colors duration-300 ease-in  hover:bg-red-800 hover:text-white ${pathname === '/contact' ? 'bg-red-800 text-white' : 'bg-white'}`}>{t("header:contact")}</Link>
                </div>
            </Drawer>
        </div>
    )
}

export default Header
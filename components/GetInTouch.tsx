import useTranslation from 'next-translate/useTranslation'
import React, { useRef, useState } from 'react'
import { message } from "antd";
import Image from 'next/image';
import LoadingGif from '../public/assets/images/loading-gif.gif'
import emailjs from "@emailjs/browser";

const GetInTouch = () => {
    const { t, lang } = useTranslation()
    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [messageText, setMessageText] = useState('')
    const [sending, setSending] = useState(false)
    const formRef = useRef(null)

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (
            fullname.trim() === "" ||
            email.trim() === "" ||
            phone.trim() === "" ||
            messageText.trim() === ""
        ) {
            return message.error(t('getintouch:errorMessage').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`));
        }

        setSending(true);
        //@ts-ignore
        emailjs
            .send(
                lang.toLowerCase() === 'tr' ? process.env.NEXT_PUBLIC_SERVICE_ID_TR as string : process.env.NEXT_PUBLIC_SERVICE_ID_EN as string,
                lang.toLowerCase() === 'tr' ? process.env.NEXT_PUBLIC_TEMPLATE_ID_TR as string : process.env.NEXT_PUBLIC_TEMPLATE_ID_EN as string,
                {
                    fullname,
                    email,
                    phone,
                    messageText
                },
                lang.toLowerCase() === 'tr' ? process.env.NEXT_PUBLIC_PUBLIC_KEY_TR as string : process.env.NEXT_PUBLIC_PUBLIC_KEY_EN as string,
            )
            .then(
                () => {
                    setEmail('')
                    setFullname('')
                    setMessageText('')
                    setPhone('')
                    setSending(false);
                    return message.success(
                        t('getintouch:successMessage').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)
                    );
                },
                (error: any) => {
                    setSending(false);
                    message.error(error.text);
                }
            );


    }

    return (
        <div className='w-full py-20'>
            <div className='flex w-full m-auto max-w-[1200px] px-4 gap-10 md:flex-col'>
                <div className='w-full'>
                    <h3 className='text-3xl font-bold mb-3'>{t('getintouch:formTitle').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</h3>
                    <p className='mb-3'>{t('getintouch:formText')}</p>
                    <form ref={formRef} onSubmit={sendMessage}>
                        <div className='flex items-center justify-between'>
                            <input value={fullname} onChange={(e) => setFullname(e.target.value)} placeholder={t('getintouch:formFullName').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} className='focus-visible:outline-red-900 w-full  pl-3 h-10 border-solid border border-gray-100' id='fullname' />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t('getintouch:formEmail').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} className='focus-visible:outline-red-900 w-full pl-3 h-10 border-solid border border-gray-100 mx-5' id='fullname' />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t('getintouch:formPhone').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} className='focus-visible:outline-red-900 w-full pl-3 h-10 border-solid border border-gray-100' id='fullname' />
                        </div>
                        <textarea value={messageText} onChange={(e) => setMessageText(e.target.value)} rows={7} className='resize-none w-full mt-6 border border-solid border-gray-100 pt-3 pl-3 focus-visible:outline-red-900' placeholder={t('getintouch:formMessage').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)} />
                        <button type='submit' disabled={sending} className='hover:bg-red-700 disabled:bg-red-900 flex items-center justify-center duration-200 transition-colors ease-in w-full max-w-[13rem] h-10 bg-red-900 text-white mt-4'>
                            {t('getintouch:formButton').toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}
                            {sending ? <Image className='ml-2' width={16} src={LoadingGif} alt='loading-gif' /> : null}
                        </button>
                    </form>
                </div>
                <div className='w-full flex flex-col mt-24 md:mt-10'>
                    <div className='mb-3 w-full flex items-center justify-between'>
                        <span>{t('getintouch:addressTitle')}</span>
                        <span className='mx-3 w-full bg-red-100 border-b border-solid border-gray-500'></span>
                        <span className='w-full max-w-xs  text-end'>{t('getintouch:addressText')}</span>
                    </div>
                    <div className='mb-3 w-full flex items-center justify-between'>
                        <span>{t('getintouch:phone')}</span>
                        <span className='mx-3 w-full bg-red-100 border-b border-solid border-gray-500'></span>
                        <span className='max-w-xs min-w-[10rem] text-end'>+90 (532) 659 37 82</span>
                    </div>
                    {
                        /*
                    <div className='mb-3 w-full flex items-center justify-between'>
                        <span>{t('getintouch:fax')}</span>
                        <span className='mx-3 w-full bg-red-100 border-b border-solid border-gray-500'></span>
                        <span className='max-w-xs min-w-[10rem] text-end'>+90 (212) 333 33 33</span>
                    </div>
                       */
                    }
                    <div className='mb-3 w-full flex items-center justify-between'>
                        <span>{t('getintouch:email')}</span>
                        <span className='mx-3 w-full bg-red-100 border-b border-solid border-gray-500'></span>
                        <span className='max-w-xs min-w-[10rem] text-end'>info@ervasavunma.com</span>
                    </div>
                    <div className='mb-3 w-full flex items-center justify-between'>
                        <span>{t('getintouch:coordinates')}</span>
                        <span className='mx-3 w-full bg-red-100 border-b border-solid border-gray-500'></span>
                        <a href='https://www.google.com/maps?q=%C4%B0vedik+Organize+Sanayi+B%C3%B6lgesi+1474.+Cadde+No:38,+Yenimahalle+/+Ankara+-+T%C3%BCrkiye&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiE0sXn8-X8AhVYRvEDHQP3AYMQ_AUoAXoECAEQAw' className='text-red-900 hover:text-red-600 transition-colors duration-200 ease-in max-w-xs min-w-[10rem] text-end' target="blank">{t('getintouch:coordinatesButton')}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch
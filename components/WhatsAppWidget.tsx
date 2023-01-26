import React from 'react'
import Image from 'next/image'
import WhatsappWidget from '../assets/images/whatsapp.png'

const WhatsAppWidget = () => {
    return (
        <>
            <a className='fixed bottom-8 right-8' href='https://api.whatsapp.com/send?phone=5326593782' target={'_blank'} rel="noreferrer">
                <Image width={54} src={WhatsappWidget} alt="whatsapp-icon" />
            </a>
        </>
    )
}

export default WhatsAppWidget
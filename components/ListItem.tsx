import useTranslation from 'next-translate/useTranslation'
import React, { useState } from 'react'
import HorizontalLine from '../public/assets/svgs/HorizontalLine'
import RightArrow from '../public/assets/svgs/RightArrow'

interface Props {
    name: string
}

const ListItem = ({ name }: Props) => {
    const [isHover, setIsHover] = useState(false)
    const { t, lang } = useTranslation()

    return (
        <div className='flex' onMouseOver={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            {
                isHover ? <RightArrow width='16px' color='#7f1d1d' /> : <HorizontalLine width='16px' color='#7f1d1d' />
            }
            <span className='font-medium ml-2'>{name.toLocaleUpperCase(`${lang}-${lang.toUpperCase()}`)}</span>
        </div>
    )
}

export default ListItem
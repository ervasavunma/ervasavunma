import React from 'react'

interface Props {
    color?: string;
    width?: string;
    height?: string
}

const Menu = (props: Props) => {
    return (
        <svg {...props} fill={props.color ? props.color : '#000000'} height={props.height ? props.height : '24px'} width={props.width ? props.width : '24px'} viewBox="0 0 100 80">
            <rect width="100" height="20" rx="8"></rect>
            <rect y="30" width="100" height="20" rx="8"></rect>
            <rect y="60" width="100" height="20" rx="8"></rect>
        </svg>
    )
}

export default Menu
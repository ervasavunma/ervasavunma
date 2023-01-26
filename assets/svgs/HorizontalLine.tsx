import React from 'react'

interface Props {
    color?: string;
    width?: string;
    height?: string
}

const HorizontalLine = (props: Props) => {
    return (
        <svg {...props} fill={props.color ? props.color : '#000000'} height={props.height ? props.height : '24px'} width={props.width ? props.width : '24px'} viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5Z"
                fill="#000000"
            />
        </svg>
    )
}

export default HorizontalLine
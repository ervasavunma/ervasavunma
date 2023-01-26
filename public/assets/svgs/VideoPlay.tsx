import React from 'react'

interface Props {
    color?: string;
    width?: string;
    height?: string
}

const VideoPlay = (props: Props) => {
    return (
        <svg {...props} fill={props.color ? props.color : '#000000'} height={props.height ? props.height : '24px'} width={props.width ? props.width : '24px'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512" xmlSpace="preserve">
            <g>
                <g>
                    <path d="M132.129,0v132.129H0V512h379.871V379.871H512V0H132.129z M330.323,462.452H49.548V181.677h280.774V462.452z
			 M462.452,330.323h-82.581V132.129H181.677V49.548h280.774V330.323z"/>
                </g>
            </g>
            <g>
                <g>
                    <polygon points="156.903,228.636 156.903,415.493 250.332,322.065 		" />
                </g>
            </g>
        </svg>
    )
}

export default VideoPlay
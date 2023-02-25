import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

export default function Hero({}: Props) {
    
    const [text, count] = useTypewriter({
        words: [
            "Hey There, I'm Bhavya Verma",
            "Aka BeeBombshell",
            "A Software Engineer",
            "Open Source Enthusiast",
        ],
        loop: true, 
        delaySpeed: 2000,
    })

    return (
        <div>
            <BackgroundCircles />
            <h1>
                <span>{text}</span>
                <Cursor cursorColor='#00C1CB' />
            </h1>
        </div>
    )
}

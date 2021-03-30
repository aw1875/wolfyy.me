import React from 'react'
import { SiGithub, SiLinkedin, SiStackoverflow, SiTwitter } from 'react-icons/all'

// Images
import about from '../../images/about.jpg'

export default function Home () {
    return (
        <>
            <div className="min-h-screen bg-light-background py-24 md:pt-32 px-10 md:px-24 dark:bg-dark-background">
                <div className="flex items-center justify-center">

                    <div className="text-center bg-light-dashboard w-80 lg:w-about md:w-96 sm:w-80 shadow-xl rounded-md p-8 dark:bg-dark-dashboard">
                        <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                            Hello, I'm Adam
                        </h2>
                        <div className="photo-wrapper p-2">
                            <img className="w-32 h-32 lg:w-60 lg:h-60 md:h-48 md:w-48 sm:h-44 sm:w-44 rounded-full object-cover mx-auto mb-8" src={ about } alt="Me" />
                        </div>

                        <p className="text-lg text-justify text-gray-900 font-semibold mb-8 dark:text-gray-300">
                            I am a 4th year Software Engineering student at Rochester Institute of Technology (RIT). 
                            I have been programming in some sort of way for about 10 years now and I love learning new things! 
                            I have had the amazing opportunity to work with a wide variety of programming languages and frameworks throughout my time as a programmer.
                            Check out some of my projects or take a peak at my social links below.
                        </p>

                        <div className="flex justify-center space-x-12 text-3xl">
                            <a href={() => false} onClick={() => window.open('https://twitter.com/_wolfy33', 'blank')}><SiTwitter style={{ color: "#1DA1F2" }} /></a>
                            <a href={() => false} onClick={() => window.open('https://github.com/aw1875', 'blank')}><SiGithub style={{ color: "#211F1F" }} /></a>
                            <a href={() => false} onClick={() => window.open('https://stackoverflow.com/users/15415297/wolfy', 'blank')}><SiStackoverflow style={{ color: "#F47F24" }} /></a>
                            <a href={() => false} onClick={() => window.open('https://www.linkedin.com/in/adamwolf3/', 'blank')}><SiLinkedin style={{ color: "#2867B2" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
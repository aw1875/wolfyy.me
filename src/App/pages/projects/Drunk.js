import React from 'react'
import { RiReactjsFill } from 'react-icons/all'

// Style
import '../../css/Portfolio.css'

// Images
import drunk from '../../../images/drunk.png'

export default function Drunk () {
    return (
        <>
        <div className="min-h-screen bg-light-background py-24 px-10 md:pt-36 md:pb-0 md:px-24 dark:bg-dark-background">

            {/* Drunk Drinking Game */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center leftside">
                    <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                        Drunk Drinking Game
                    </h2>
                    <p className="text-lg text-gray-900 mb-2 dark:text-gray-300">A modern approach to a drinking board game</p>
                    <div className="flex space-x-12 text-3xl">
                        <a href={() => false} onClick={() => window.open('https://reactjs.org/', 'blank')}><RiReactjsFill style={{ color: "#61DBFB" }} /></a>
                    </div>
                    <div className="flex space-x-12 text-2xl uppercase mt-6">
                        <a href={() => false} onClick={() => window.open('https://github.com/aw1875/drunk-drinking-game', 'blank')} style={{ color: "#6a737d" }}>Repository</a>
                        <a href={() => false} onClick={() => window.open('https://drunk.cashcollege.me/', 'blank')} style={{ color: "#fa824c" }}>Live</a>
                    </div>
                </div>

                {/* Right float */}
                <div>
                    <div className="w-full h-auto rounded-lg shadow-2xl mb-8">
                        <img className="object-cover" src={ drunk } alt="hCaptcha Solver" />
                    </div>
                    <p className="text-lg text-justify text-gray-900 font-semibold dark:text-gray-300">
                        After seeing many people posting pictures of their drinking game boards on social media during the COVID19 pandemic, I decided to take one friends designs and convert it into a web based game that anyone can play using React.<br/><br/>
                        You can find the source code and download the game to your own computer by clicking the "repository" link. If you don't want to go through all the trouble of setting the project up yourself, you can find a live version by clicking the "live" link <br/><br/>
                    </p>
                </div>
            </div>
        
        </div>
        </>
    );
}


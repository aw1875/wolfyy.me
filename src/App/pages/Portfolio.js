import React from 'react'
import { RiReactjsFill, SiElectron, FcGoogle, IoLogoNodejs, ImNpm, SiSwift, SiCocoapods } from 'react-icons/all'

// Style
// import '../css/Portfolio.css'

// Images
import soxada from '../../images/soxada.png'
import hcaptcha from '../../images/hcaptcha.gif'
import drunk from '../../images/drunk.png'
import cashcollege from '../../images/cashcollege.gif'

export default function Portfolio () {
    return (
        <>
        <div className="min-h-screen bg-light-background space-y-36 py-10 px-10 md:px-24 dark:bg-dark-secondary">

            {/* Soxada */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
                
                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center">
                    <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                        Soxada
                    </h2>
                    <p className="text-lg text-gray-900 mb-2 dark:text-gray-300">Shoe bot desktop application</p>
                    <div className="flex space-x-12 text-3xl">
                        <a href={() => false} onClick={() => window.open('https://reactjs.org/', 'blank')}><RiReactjsFill style={{ color: "#61DBFB" }} /></a>
                        <a href={() => false} onClick={() => window.open('https://www.electronjs.org/', 'blank')}><SiElectron style={{ color: "#75e2ff" }} /></a>
                        <a href={() => false} onClick={() => window.open('https://nodejs.org/en/', 'blank')}><IoLogoNodejs style={{ color: "#68A063" }} /></a>
                    </div>
                </div>

                {/* Right float */}
                <div>
                    <div className="w-full h-auto rounded-lg shadow-2xl mb-8">
                        <img className="object-cover" src={ soxada } alt="Soxada" />
                    </div>
                    <p className="text-lg text-justify text-gray-900 font-semibold dark:text-gray-300">
                        Created with React, Electron and Node.js The front end was created in React with the assistance of the bootstrap styling framework. <br/><br/>
                        Electron was used to convert the application into a desktop native application that can easily be installed by any user across any operating system. <br/><br/>
                        Lastly, Node.js was used for the entire system backend!
                    </p>
                </div>
            </div>
        
            {/* hCaptcha Solver */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center">
                    <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                        hCaptcha Solver
                    </h2>
                    <p className="text-lg text-gray-900 mb-2 dark:text-gray-300">A library to solve hcaptcha challenges that are automated within puppeteer</p>
                    <div className="flex space-x-12 text-3xl">
                        <a href={() => false} onClick={() => window.open('http://npmjs.com/', 'blank')}><ImNpm style={{ color: "#CC3534" }} /></a>
                        <a href={() => false} onClick={() => window.open('https://cloud.google.com/vision', 'blank')}><FcGoogle /></a>
                        <a href={() => false} onClick={() => window.open('https://nodejs.org/en/', 'blank')}><IoLogoNodejs style={{ color: "#68A063" }} /></a>
                    </div>
                    <div className="flex space-x-6 md:space-x-12 text-2xl uppercase mt-6">
                        <a href={() => false} onClick={() => window.open('https://github.com/aw1875/puppeteer-hcaptcha', 'blank')} style={{ color: "#6a737d" }}>Repository</a>
                        <a href={() => false} onClick={() => window.open('https://www.npmjs.com/package/puppeteer-hcaptcha', 'blank')} style={{ color: "#CC3534" }}>Module</a>
                    </div>
                </div>

                {/* Right float */}
                <div>
                    <div className="w-full h-auto rounded-lg shadow-2xl mb-8">
                        <img className="object-cover" src={ hcaptcha } alt="hCaptcha Solver" />
                    </div>
                    <p className="text-lg text-justify text-gray-900 font-semibold dark:text-gray-300">
                        An NPM module to solve hCaptcha challenges using Google Vision and Puppeteer. <br/><br/>
                        The library currently has 2 ways to solve. One way is headless and just returns the response token, while the second version is headfull and correctly assigns the returned value and then submits the page. <br/><br/>
                        Google Vision is being used for image recognition purposes and the actual solver takes anywhere from 3 seconds to 45 seconds to solve depending on the amount of previous requests sent. I would ideally like to speed it up but threading in Node is a pain so right now this is where it stands.
                    </p>
                </div>
            </div>
        
            {/* Drunk Drinking Game */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center">
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
        
            {/* Cash College */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center">
                    <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                        Cash College
                    </h2>
                    <p className="text-lg text-gray-900 mb-2 dark:text-gray-300">A marketplace for College Students</p>
                    <div className="flex space-x-12 text-3xl">
                        <a href={() => false} onClick={() => window.open('https://www.swift.com/', 'blank')}><SiSwift style={{ color: "#ed523f" }} /></a>
                        <a href={() => false} onClick={() => window.open('https://cocoapods.org/', 'blank')}><SiCocoapods style={{ color: "#fa2a00" }} /></a>
                    </div>
                </div>

                {/* Right float */}
                <div>
                    <div className="flex justify-center w-full h-auto mb-8">
                        <img className="h-72 w-auto md:w-72 md:h-auto object-cover" src={ cashcollege } alt="hCaptcha Solver" />
                    </div>
                    <p className="text-lg text-justify text-gray-900 font-semibold dark:text-gray-300">
                        With this app you can search for items like textbooks, furniture, electronics, housing, tutors, and more. You can use the app to talk to sellers about the item and plan out a meeting. <br/><br/>
                        As a seller you can keep track of the items you are selling and mark as sold as soon as the transaction has been completed. Currently, I'm trying to make sure all the functionality is implemented before I go back and make it look great. <br/><br/>
                    </p>
                </div>
            </div>
        
        </div>
        </>
    );
}


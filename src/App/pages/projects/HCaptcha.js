import React from 'react'
import { FcGoogle, IoLogoNodejs, ImNpm } from 'react-icons/all'

// Style
import '../../css/Portfolio.css'

// Images
import hcaptcha from '../../../images/hcaptcha-demo.gif'

export default function HCaptcha () {
    return (
        <>
            <div className="min-h-screen bg-light-background py-24 px-10 md:pt-36 md:pb-0 md:px-24 dark:bg-dark-background">

            {/* hCaptcha Solver */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center leftside">
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
                        <a href={() => false} onClick={() => window.open('https://github.com/aw1875/puppeteer-hcaptcha', 'blank')} style={{ color: "#7a848f" }}>Repository</a>
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
        
           
        
        </div>
        </>
    );
}


import React from 'react'
import { RiReactjsFill, SiElectron, IoLogoNodejs } from 'react-icons/all'

// Style
import '../../css/Portfolio.css'

// Images
import soxada from '../../../images/soxada.png'

export default function Soxada () {
    return (
        <>
        <div className="min-h-screen bg-light-background py-24 px-10 md:pt-36 md:pb-0 md:px-24 dark:bg-dark-background">

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
        
        </div>
        </>
    );
}


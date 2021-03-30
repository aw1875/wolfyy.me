import React from 'react'
// Style
import '../css/Projects.css'

// Images
import soxada from '../../images/soxada.png'
import hcaptcha from '../../images/hcaptcha.gif'
import drunk from '../../images/drunk.png'
import cashcollege from '../../images/cashcollege.gif'
import Navbar from '../components/Navbar'

export default function Projects() {
    return (
        <>
            <div className="min-h-screen bg-light-background flex justify-center items-center space-y-36 py-24 px-10 md:px-24 dark:bg-dark-secondary">
                <div className="grid md:grid-cols-2 gap-4">

                    {/* Soxada Card */}
                    <div class="rounded overflow-hidden shadow-lg bg-light-dashboard dark:bg-dark-dashboard card" onClick={() => window.location.href="/projects/soxada"}>
                    <img class="w-full md:h-56 h-36 object-cover" src={ soxada } alt="hCaptcha Solver" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2 text-black text-center dark:text-white">Soxada</div>
                            <p class="text-gray-900 text-base text-center dark:text-gray-300">
                                Shoe bot desktop application
                            </p>
                        </div>
                    </div>
                
                    {/* hCaptcha Solver Card */}
                    <div class="rounded overflow-hidden shadow-lg bg-light-dashboard dark:bg-dark-dashboard card" onClick={() => window.location.href="/projects/hcaptcha"}>
                    <img class="w-full md:h-56 h-36 object-cover" src={ hcaptcha } alt="hCaptcha Solver" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 text-black text-center dark:text-white">hCaptcha Solver</div>
                                <p class="text-gray-900 text-base text-center dark:text-gray-300">
                                    A library to solve hcaptcha challenges that are automated within puppeteer
                                </p>
                            </div>
                        </div>
                    
                    {/* Drunk Drinking Game Card */}
                    <div class="rounded overflow-hidden shadow-lg bg-light-dashboard dark:bg-dark-dashboard card" onClick={() => window.location.href="/projects/drunk"}>
                    <img class="w-full md:h-56 h-36 object-cover" src={ drunk } alt="hCaptcha Solver" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 text-black text-center dark:text-white">Drunk Drinking Game</div>
                                <p class="text-gray-900 text-base text-center dark:text-gray-300">
                                    A modern approach to a drinking board game
                                </p>
                            </div>
                        </div>
                    
                    {/* Cash College Card */}
                    <div class="rounded overflow-hidden shadow-lg bg-light-dashboard dark:bg-dark-dashboard card" onClick={() => window.location.href="/projects/cashcollege"}>
                    <img class="w-full md:h-56 h-36 object-contain" src={ cashcollege } alt="Cash College" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2 text-black text-center dark:text-white">Cash College</div>
                                <p class="text-gray-900 text-base text-center dark:text-gray-300">
                                    A marketplace for College Students
                                </p>
                            </div>
                        </div>
                    
                </div>
            </div>
        </>
    );
}


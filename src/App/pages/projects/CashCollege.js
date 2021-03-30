import React from 'react'
import { SiSwift, SiCocoapods } from 'react-icons/all'

// Style
import '../../css/Portfolio.css'

// Images
import cashcollege from '../../../images/cashcollege.gif'

export default function CashCollege () {
    return (
        <>
        <div className="min-h-screen bg-light-background py-24 px-10 md:pt-36 md:pb-0 md:px-24 dark:bg-dark-background">
        
            {/* Cash College */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center leftside">
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


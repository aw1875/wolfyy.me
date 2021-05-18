import React from 'react'
import { IoLogoNodejs } from 'react-icons/all'

// Style
import '../../css/Portfolio.css'

// Images
import wolfymusic from '../../../images/wolfymusic.gif'

export default function Soxada () {
    return (
        <>
        <div className="min-h-screen bg-light-background py-24 px-10 md:pt-36 md:pb-0 md:px-24 dark:bg-dark-background">

            {/* Soxada */}
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2">
                
                {/* Left Float */}
                <div className="md:flex md:flex-col md:justify-center items-center">
                    <h2 className="text-black text-5xl font-bold mb-4 uppercase dark:text-white">
                        Wolfy Music Bot
                    </h2>
                    <p className="text-lg text-gray-900 mb-2 dark:text-gray-300">Discord bot to play Spotify Music in discord voice channels</p>
                    <div className="flex space-x-12 text-3xl">
                        <a href={() => false} onClick={() => window.open('https://nodejs.org/en/', 'blank')}><IoLogoNodejs style={{ color: "#68A063" }} /></a>
                    </div>
                </div>

                {/* Right float */}
                <div>
                    <div className="w-full h-auto rounded-lg shadow-2xl mb-8">
                        <img className="object-cover w-full" src={ wolfymusic } alt="Soxada" />
                    </div>
                    <p className="text-lg text-justify text-gray-900 font-semibold dark:text-gray-300">
                        Created using NodeJS and the DiscordJS Module. This is a fairly basic Discord bot that users can use to search for a song on Spotify and have it play in their current voice channel.<br/>
                        It uses a queue so that users may queue up as many songs as they would like while the current song is playing and the bot will automatically move to the next song in the queue when the current song is finished.<br/>
                        Once the queue has been completed the bot automatically leaves the voice call until it is told to join again for more entertainment.
                    </p>
                </div>
            </div>
        
        </div>
        </>
    );
}


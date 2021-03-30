import React, { Component } from 'react'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Cookies } from 'react-cookie';

// Style
import '../css/Navbar.css'
// Instantiate cookies
const cookie = new Cookies();

class Navbar extends Component {

    state = {
        dark: false
    }

    componentDidMount() {
        const root = window.document.documentElement;
        if (cookie.get('dark') === "true") {
            this.setState({ darkMode: true });
            root.classList.add('dark')
            document.querySelector('.toggle-dot').style.transform = "translateX(32px)"
        } else {
            this.setState({ darkMode: false });
            root.classList.remove('dark')
            document.querySelector('.toggle-dot').style.transform = "translateX(0)"
        }
    }

    toggleDark() {
        const root = window.document.documentElement;
        if (!this.state.darkMode) {
            this.setState({ darkMode: !this.state.darkMode });
            root.classList.add('dark')
            document.querySelector('.toggle-dot').style.transform = "translateX(32px)"

            // Set cookies
            cookie.set('dark', true, { domain: '.wolfyy.me' })
        } else {
            this.setState({ darkMode: !this.state.darkMode });
            root.classList.remove('dark')
            document.querySelector('.toggle-dot').style.transform = "translateX(0)"

            // Remove cookies
            cookie.set('dark', false, { domain: '.wolfyy.me' })
        }
    }

    render() {
        return (
            <>
                <div className="flex flex-row justify-center items-center space-x-2 fixed p-x-4 md:space-x-16 sm:space-x-8 h-20 w-full text-white bg-dark-background dark:bg-dark-dashboard">
                    <a href='/' className="text-md font-semibold uppercase">Home</a>
                    <a href='/projects' className="text-md font-semibold uppercase">Projects</a>
                    <div id="toggleBtn" onClick={this.toggleDark.bind(this)} className="flex md:fixed md:right-5 justify-end items-center">
                        <input type="checkbox" id="toggle" className="hidden" />
                        <div className="w-16 h-8 flex items-center bg-gray-600 rounded-full p-1 dark:bg-gray-300">
                            <div className="toggle-dot w-6 h-6 bg-gray-800 rounded-full text-center shadow-md transform dark:bg-white">
                                {this.state.darkMode ? <FontAwesomeIcon icon={faSun} style={{ color: "#FC9601" }} /> : <FontAwesomeIcon icon={faMoon} style={{ color: "#FFF" }} />}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;
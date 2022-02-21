import React from 'react';

import LinkedInLogo from '../assets/img/LI-In-Bug.png';
import GitHubLogo from '../assets/img/GitHub-Mark-64px.png';

import './Header.css' 

const Header = (props) => {
    
    return (
        <React.Fragment>
            <div class="text-center mb-5 p-4 border-b border-slate-200">
                <div class="text-4xl text-slate-700 font-cormorant">
                    Zachary Welden
                </div>
                <div class="text-lg text-slate-500 tracking-wide">
                    Software Engineer
                </div>
                <div class="text-center">
                    <a href="https://www.linkedin.com/in/zacharywelden" class="inline-block mr-2" target="_blank" rel="noreferrer"><img src={LinkedInLogo} class="linkedin-header-img" alt="LinkedIn"/></a>
                    <a href="https://github.com/zwelden" class="inline-block" target="_blank" rel="noreferrer"><img src={GitHubLogo} class="github-header-img" alt="GitHub"/></a>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header;
import React from 'react';
import './SiteContainer.css' 
import Header from './Header.js';
import About from './About.js';
import Projects from './Projects.js';

const SiteContainer = (props) => {
    
    return (
        <React.Fragment>
            <div class="container mx-auto p-4 font-light">
                <Header />
                <About />
                <Projects />
            </div>
        </React.Fragment>
    )
}

export default SiteContainer;
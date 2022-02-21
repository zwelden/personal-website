import React from 'react';
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
            </div>
        </React.Fragment>
    )
}

export default Header;
import React from 'react';
import './WorkCard.css' 

const WorkCard = ({company, title, description, tech, start, end, link}) => {
    
    return (
        <React.Fragment>
            <div class="border border-slate-200 rounded text-left">
                <div class="bg-slate-100 p-1 text-lg font-normal text-slate-700">{ company } - <span class="italic">{ title }</span></div>
                <div class="p-2">
                    <div class="mb-2">
                        <div class="text-xs text-slate-500 uppercase line-height-1">Start - End</div>
                        <div class="">{ start } - { end } </div>
                    </div>

                    <div class="mb-2">
                        <div class="text-xs text-slate-500 uppercase line-height-1">Description</div>
                        <div class="">{ description }</div>
                    </div>

                    <div class="mb-2">
                        <div class="text-xs text-slate-500 uppercase line-height-1">Tech</div>
                        <div class="">
                            { 
                                tech.map((techName, index) => {
                                    return <div class="inline-block mr-2 text-slate-400" key={index}>[ <span key={index} class="text-slate-900">{techName}</span> ]</div>
                                })
                            }
                        </div>
                    </div>

                    {(link && link.length > 0) && 
                        <div class="mb-2">
                            <div class="text-xs text-slate-500 uppercase line-height-1">Link</div>
                            <a class="text-sky-600 hover:text-sky-500" target="_blank" rel="noreferrer" href={link}>{link}</a>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkCard;
import React from 'react';
import './ProjectCard.css' 

const ProjectCard = ({title, description, tech, link, link_post_script, github}) => {
    
    return (
        <React.Fragment>
            <div class="border border-slate-200 rounded text-left">
                <div class="bg-slate-100 p-1 text-lg font-normal text-slate-700">{ title }</div>
                <div class="p-2">
                    <div class="mb-2">
                        <div class="text-xs text-slate-500 uppercase line-hight-1">Description</div>
                        <div class="">{ description }</div>
                    </div>

                    <div class="mb-2">
                        <div class="text-xs text-slate-500 uppercase line-hight-1">Tech</div>
                        <div class="">
                            { 
                                tech.map((techName, index) => {
                                    return <div class="inline-block mr-2 text-slate-400" key={ index }>[ <span key={index} class="text-slate-900">{techName}</span> ]</div>
                                })
                            }
                        </div>
                    </div>

                    {(link && link.length > 0) && 
                        <div class="mb-2">
                            <div class="text-xs text-slate-500 uppercase line-hight-1">Link</div>
                            <a class="text-sky-600 hover:text-sky-500" target="_blank" rel="noreferrer" href={link}>{link}</a> 
                            {(link_post_script && link_post_script.length > 0) && 
                                <span class="ml-1 text-xs text-slate-500 line-hight-1"> 
                                    {link_post_script}
                                </span>
                            }
                        </div>
                    }

                    

                    {(github && github.length > 0) && 
                        <div class="mb-2">
                            <div class="text-xs text-slate-500 uppercase line-hight-1">Github</div>
                            <a class="text-sky-600 hover:text-sky-500" target="_blank" rel="noreferrer" href={github}>{github}</a>
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectCard;
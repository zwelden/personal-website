import React from 'react';
import './Projects.css' 
import ProjectCard from './ProjectCard'

const Projects = (props) => {

    const projects = [
        { 
            title: 'USMNT Club Watch',
            description: 'Track all the club level games for players eligible to be called up to the USMNT',
            tech: ['Ruby', 'Rails', 'Digital Ocean'],
            link: 'https://usmntclubwatch.com',
            github: ''
        },
        {
            title: 'Chess Demo',
            description: 'A two player chess game with rule enforcement and move order tracking',
            tech: ['Javascript', 'React', 'Netlify'],
            link: 'https://stupefied-elion-9d2f79.netlify.app/',
            github: 'https://github.com/zwelden/react-chessboard'
        },
        {
            title: 'Taskerville',
            description: 'A simple cron like task scheduler in Elixir',
            tech: ['Elixir', 'Hex.pm'],
            link: 'https://hex.pm/packages/taskerville',
            github: 'https://github.com/zwelden/taskerville'
        },
        {
            title: 'Command Line RPG',
            description: 'A command line Role Playing Game',
            tech: ['Ruby'],
            link: '',
            github: 'https://github.com/zwelden/ruby-cli-rpg-game'
        },
        {
            title: 'Pomodoro App',
            description: 'A customizable pomodoro timer',
            tech: ['Javascript', 'Vue', 'Netlify'],
            link: ' https://peaceful-bose-2cc581.netlify.app/',
            github: 'https://github.com/zwelden/pomodoro-app'
        }


    ]
    
    return (
        <React.Fragment>
            <div class="text-center mb-5 pb-5">
                <div class="text-slate-700 text-2xl font-cormorant tracking-wide mb-1">SIDE PROJECTS</div>
                <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard 
                                    key={index}
                                    title={project.title}
                                    description={project.description}
                                    tech={project.tech}
                                    link={project.link}
                                    github={project.github}
                                >
                                </ProjectCard>
                            )
                        })
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Projects;
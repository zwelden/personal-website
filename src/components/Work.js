import React from 'react';
import './Work.css' 
import WorkCard from './WorkCard.js'

const Work = (props) => {

    const workHistory = [
        {
            company: 'Tenstreet LLC',
            title: 'Software Engineer',
            description: 'Trucking and construction industry ATS, recruiting, compliance, and safety platform. Lead developer for the FMCSA/CSA monitoring, construction documents and forms exchange, and "Insights" retention survey products.',
            tech: ['PHP', 'Javascript', 'Linux', 'MySQL'],
            start: '2018',
            end: 'Current',
            link: 'https://dashboard.tenstreet.com'
        },
        {
            company: 'Brothers & Company',
            title: 'Front-end Developer',
            description: 'Ad Agency. Developed, maintained, and extended responsive and engaging web projects for medium to large cap businesses clients.',
            tech: ['PHP', 'Javascript', 'Laravel', 'Drupal', 'Magento', 'MySQL'],
            start: '2017',
            end: '2018',
            link: ''
        }
    ]
    
    return (
        <React.Fragment>
            <div class="text-center mb-5 pb-5 border-b border-slate-200">
                <div class="text-slate-700 text-2xl font-cormorant tracking-wide uppercase mb-1">Work</div>
                <div class="max-w-6xl grid md:grid-cols-2 gap-4 m-auto">
                    
                    {
                        workHistory.map((workItem, index) => {
                            return (
                                <WorkCard key={index} 
                                        company={workItem.company}
                                        title={workItem.title}
                                        description={workItem.description}
                                        tech={workItem.tech}
                                        start={workItem.start}
                                        end={workItem.end}
                                        link={workItem.link}
                                    >
                                </WorkCard>
                            )
                        })
                    }

                </div>
            </div>
        </React.Fragment>
    )
}

export default Work;
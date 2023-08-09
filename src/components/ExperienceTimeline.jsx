import React from 'react'
import {ReactComponent as WorkIcon} from '../assets/work.svg';
import {ReactComponent as SchoolIcon} from '../assets/school.svg';
import timelineElements from './timelineElements';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const ExperienceTimeline = () => {
let workIconStyles = {background: '#0D52BD'}
let schoolIconStyles = {background: '#997950'}

  return (
    <div
    name="Experience Timeline"
    className="bg-gradient-to-b from-black to-blue-800 text-white pt-96 sm:pt-0"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
            <div className="pb-8">
                <h1 className="text-4xl font-bold inline border-b-4 border-blue-500">Experience Timeline</h1>  
            </div>
            
            <VerticalTimeline
                animate={true}
            >
                {
                    timelineElements.map(element => {
                        let isWorkIcon = element.icon === "work";

                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date"
                                iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                                icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
                                contentStyle={{background: '#999999', opacity:0.8}}

                                
                            
                            >
                                
                                <h3 className="vertical-timeline-element-title font-bold text-xl"> 
                                    {element.title}
                                </h3>
                                <h5 className="vertical-timeline-element-subtitle text-sm">
                                    {element.subtitle}
                                </h5>
                                <p className="text-sm">{element.description}</p>
                                <p className="text-sm">{element.description2}</p>
                                <p className="text-sm">{element.description3}</p>
                                <p className="text-sm">{element.description4}</p>

                                

                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
    </div>

    
  )
}

export default ExperienceTimeline
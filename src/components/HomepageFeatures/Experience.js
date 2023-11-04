import React from 'react'
import Experiences from '../../data/Experiences.json'
import '../../css/custom.css'


export default function Experience() {
    return (
        <div className='experience' id='experience'>
            <div className='experience--content'>
                <h1 className='experience--title'>EXPERIÊNCIA</h1>
                {Experiences.experiences.map(exp => (
                    <div className='experience--details'>
                        <img className='experience--details--img' src={exp.logo} alt='Logo'/>
                        <div className='experience--details--text'>
                            <p className='experience--details--text--title'>{exp.title}</p>
                            <p className='experience--details--text--company'>{exp.company}</p>
                            <p className='experience--details--text--date'>{exp.start} - {exp.end}</p>
                            <p className='experience--details--text--activities'>{exp.activities.map(activity => (
                                    <p>• {activity}</p>
                            ))}</p>
                            <span className='experience--details--text--tools'>{exp.tools}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
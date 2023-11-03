import React from 'react'
import Educations from '../../data/Education.json'

export default function Education() {
    return (
        <div className='education' id='education'>
            <div className='education--content'>
                <h1 className='education--title'>EDUCAÇÃO</h1>
                {Educations.education.map(edu => (
                    <div className='education--details'>
                        <img className='education--details--img' src={edu.logo} alt='Logo'/>
                        <div className='education--details--text'>
                            <p className='education--details--text--place'>{edu.place}</p>
                            <p className='education--details--text--title'>{edu.title}</p>
                            <p className='education--details--text--date'>{edu.start} - {edu.end}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
import React from 'react';
import Photo from '../../images/about_photo.png'
import linkedin from '../../images/linkedin.png'
import github from '../../images/github.png'

export default function About() {
    return (
        <div className='about' id='about'>
            <div className='about--content'>
                <h1 className='about--name' ><span>Diogo Almeida</span></h1>
                <img className='about--img' src={Photo} alt='Ilustration of Diogo'/>
                <p className='about--description'>Estudante de Ciência da Computação na UFPR com interesse
                na área de Ciência de Dados.</p>
            </div>
            <div className='about--contact'>
                <a href='https://www.linkedin.com/in/diogohal' target='_blank'><img className='about--contact--img' src={linkedin}d/></a>
                <a href='https://www.github.com/diogohal/' target='_blank'><img className='about--contact--img' src={github}d/></a>
            </div>
        </div>
    )
}
import React from 'react'
import {Link} from 'react-scroll'
import Computer from '../../images/footer_img.png'

export default function Nav() {
    return (
        <div className='nav'>
            <a href=''>
                <img className='nav--img' src={Computer} alt='Computer icon'/>
            </a>
            <div className='nav--text'>
                <a className='nav--items' href='/docs/intro'>PROJETOS</a >
                <a className='nav--items'>BLOG</a >
                <a className='nav--items'>SOBRE</a >
            </div>
        </div>
    )
}
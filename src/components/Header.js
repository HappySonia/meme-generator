import React from 'react'
import Share from './Share'
import {Routes,Route,Link} from 'react-router-dom';
export default function Header(){
    return (
        <header className='header'>            
            <img className="header-image" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="" />
            <h2 className="header-title">Meme Generator             
                <Link to='/share'>
                <span className="material-icons share">ios_share</span> 
                </Link>
            </h2>            
        </header>
    )
}
import React from 'react'
import Share from './Share'
import { Routes, Route, Link } from 'react-router-dom';
export default function Header({ toggle, memeVersion }){    
    return (
        <header className='header'>            
            <img className="header-image" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="" />
            <h2 className="header-title">Meme Generator                       
                <button onClick={toggle}>{(memeVersion) ? <span>Twisted</span> : <span>Custom</span>}</button>
            </h2>            
        </header>
    )
}
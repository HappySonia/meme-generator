import React from 'react'
export default function Header({ toggle, memeVersion }){    
    return (
        <header className='header'>            
            <img className="header-image" src="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt="" />
            <h2 className="header-title">
                Meme Generator                                      
            </h2>
            <button className='version-btn' 
                    onClick={toggle}>{(memeVersion) ? "Custom" : "Twisted"}
            </button>            
        </header>
    )
}
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
const axios = require('axios')

export default function CustomMeme(){    
    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        image:'http:i.imgflip.com/1bij.jpg',
        userInput:'fun'
    })
    
    function getImage(event){    
        event.preventDefault();       
        axios.get(`https://api.unsplash.com/photos/random?query=${meme.userInput}&&client_id=vhKvvsvg1maXci_YO7jlngE6sP_u-surI-YZxaysH-o`)       
        .then( data => {       
            let url =  data.data.urls.small                
            return setMeme(prevMeme=>({
                ...prevMeme,
                image:url
            }))                      
        })                                                               
    }

    function handleChange(event){        
        const{name,value}=event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }
    return (
        <main>
            <div className='form'>                
                <input 
                    name='topText' 
                    value={meme.topText} 
                    onChange={handleChange} 
                    type="text" 
                    className='form-input' 
                    placeholder='Top Text' 
                />
                <input
                    name='bottomText' 
                    value={meme.topBottom} 
                    onChange={handleChange}  
                    type="text" 
                    className='form-input'
                    placeholder='Bottom Text' 
                />
                <input
                    name='userInput' 
                    value={meme.userInput} 
                    onChange={handleChange}  
                    type="text" 
                    className='form-input'
                    placeholder='userInput' 
                />
                <button 
                    className='form-button' 
                    onClick={getImage}>Search a image
                </button>
            </div>
            <div className="meme">
                <img src={meme.image} alt="" className='meme-image' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
                <h2 className='meme-text userinput'>{meme.userInput}</h2>
                <Link to='/share'>
                    <span className="material-icons share">ios_share</span> 
                </Link>
            </div>            
        </main>
    )
}

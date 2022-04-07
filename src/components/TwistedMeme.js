import React, { useState } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
const axios = require('axios')

export default function TwistedMeme(){       
    const [image,setImage] = useState('https://www.goldderby.com/wp-content/uploads/2020/03/The-Simpsons-Homer-Simpson.jpg?w=620&h=360&crop=1')

    const [quote,setQuote] = useState('')
        
    function getMemeImage(event){    
        event.preventDefault();        
        axios.get('https://api.imgflip.com/get_memes')        
        .then(data => {console.log(data)
        const memesArray = data.data.data.memes;   
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =  memesArray[randomNumber].url                 
        return setImage(url)        
    })        
    }
   
    function getQuote(event){
        event.preventDefault(); 
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')        
        .then( data => {                      
            return setQuote(data.data[0].quote)        
        }
        )                            
    }

    return (
        <main>
            <div className='form'> 
                              
                
                <button 
                    className='form-button' 
                    onClick={getMemeImage}>Get a Image
                </button>                
                <button 
                    className='form-button' 
                    onClick={getQuote}>Get a random Quotes
                </button>
            </div>
            <div className="meme">
                <img src={image} alt="" className='meme-image' />
                <h2 className='meme-text top'>{quote}</h2>
                <Link to='/share'>
                    <span className="material-icons share">ios_share</span> 
                </Link>                
            </div>            
        </main>
    )
}
import React, { useState } from 'react';
const axios = require('axios')

export default function TwistedMeme(){       
    const [image,setImage] = useState('https://cdn.vox-cdn.com/thumbor/cV8X8BZ-aGs8pv3D-sCMr5fQZyI=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19933026/image.png')

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
        })                            
    }

    return (
        <main>
            <div className='form'>                                               
                <button 
                    className='form-button-twisted' 
                    onClick={getMemeImage}>Get an Image 🖼️
                </button>                
                <button 
                    className='form-button-twisted' 
                    onClick={getQuote}>Get a Meme idea
                </button>
            </div>
            <div className="meme">
                <img src={image} alt="" className='meme-image' />
                <h2 className='quote top'>{quote}</h2>
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                <a class="twitter-share-button" target="_blank"
                href={`https://twitter.com/intent/tweet?url=${image}`}>
                Tweet</a>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftwisted-meme-generator.surge.sh%2F&amp;src=sdkpreparse" class="fb-share-button">Facebook</a>                
            </div>            
        </main>
    )
}
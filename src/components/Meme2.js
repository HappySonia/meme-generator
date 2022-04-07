import React from 'react'
const axios = require('axios')

export default function Meme2(){    
    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',
        randomImage:'http:i.imgflip.com/1bij.jpg'
    })
    
    function getMemeImage(event){    
        event.preventDefault();        
        axios.get('https://api.unsplash.com/search/collections?page=1&query=happy&&rel="first"&&client_id=vhKvvsvg1maXci_YO7jlngE6sP_u-surI-YZxaysH-o')        
        .then(data => {console.log(data)
        const memesArray = data.data.data.memes;   
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url =  memesArray[randomNumber].url                 
        return setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
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
                <button 
                    className='form-button' 
                    onClick={getMemeImage}>Get a random meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className='meme-image' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>
            </div>            
        </main>
    )
}
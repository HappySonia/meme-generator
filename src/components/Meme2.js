import React from 'react'
const axios = require('axios')

export default function Meme2(){    
    const [meme,setMeme] = React.useState({
        Text:'',        
        Image:'https://www.goldderby.com/wp-content/uploads/2020/03/The-Simpsons-Homer-Simpson.jpg?w=620&h=360&crop=1'
    })
        
    function getMemeImage(event){    
        event.preventDefault();        
        axios.get('https://api.unsplash.com/search/collections?page=1&query=happy&&rel="first"&&client_id=')        
        .then(data => {console.log(data)                
        const url =  data.results[0].tags[0].source.cover_photo.urls.small                
        return setMeme(prevMeme=>({
            ...prevMeme,
            Image:url
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
                <label htmlFor="">Topic:</label>               
                <input 
                    name='topic' 
                    value={meme.topic} 
                    onChange={handleChange} 
                    type="text" 
                    className='form-input' 
                    placeholder='topic' 
                />                
                <button 
                    className='form-button' 
                    onClick={getQuotes}>Get a random Quotes
                </button>
            </div>
            <div className="meme">
                <img src={meme.Image} alt="" className='meme-image' />
                <h2 className='meme-text top'>{meme.Text}</h2>                
            </div>            
        </main>
    )
}
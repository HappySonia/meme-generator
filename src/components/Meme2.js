import React, { useState } from 'react';
import {Routes,Route,Link} from 'react-router-dom';
const axios = require('axios')


export default function Meme2(){       
    const [image,setImage] = useState('https://www.goldderby.com/wp-content/uploads/2020/03/The-Simpsons-Homer-Simpson.jpg?w=620&h=360&crop=1')

    const [userInput,setUserInput] = useState('')

    const [quote,setQuote] = useState('')
    
    function handleChange(event){ 
        event.preventDefault();                 
        return setUserInput(event.target.value)    
    }
    
    function getImage(event){    
        event.preventDefault();       
        axios.get(`https://api.unsplash.com/search/collections?page=1&query=${userInput}&&rel="first"&&client_id=vhKvvsvg1maXci_YO7jlngE6sP_u-surI-YZxaysH-o`)        
        .then( data => {       
            let url =  data.data.results[0].tags[0].source.cover_photo.urls.small                
            return setImage(url)                        
        })                                                               
    }
   
    function getQuote(event){
        event.preventDefault(); 
        axios.get('https://thesimpsonsquoteapi.glitch.me/quotes')        
        .then( data => {
            //console.log(data)            
            return setQuote(data.data[0].quote)        
        }
        )                            
    }

    return (
        <main>
            <div className='form'> 
                <label htmlFor="">Topic:</label>               
                <input                     
                    onChange={handleChange} 
                    type="text" 
                    className='form-input' 
                    placeholder='topic' 
                />
                <button 
                    className='form-button' 
                    onClick={getImage}>Get a Image
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
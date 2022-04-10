import React from 'react'
const axios = require('axios')

export default function CustomMeme(){    
    const [meme,setMeme] = React.useState({
        topText:'',
        bottomText:'',        
        userInput:''        
    })
    const [image,setImage] = React.useState('https://png.pngitem.com/pimgs/s/674-6749336_just-gonna-leave-some-of-these-here-shut.png')
    
    function getImage(event){    
        event.preventDefault();       
        axios.get(`https://api.unsplash.com/photos/random?query=${meme.userInput}&&client_id=vhKvvsvg1maXci_YO7jlngE6sP_u-surI-YZxaysH-o`)       
        .then( data => {       
            let url = data.data.urls.small                
            return setImage(url)        
        })                                                        
    }

    function handleChange(event){
        event.preventDefault();         
        const{ name, value } = event.target
        setMeme(prevMeme => ({
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
                    value={meme.bottomText} 
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
                    className='form-button-custom' 
                    onClick={getImage}>Search a image 🖼️
                </button>
            </div>
            <div className="meme">
                <img src={image} alt="" className='meme-image' />
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom'>{meme.bottomText}</h2>                
                               
                <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
                <a class="twitter-share-button" target="_blank"
                href={`https://twitter.com/intent/tweet?url=${image}`}>
                Tweet</a>

                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftwisted-meme-generator.surge.sh%2F&amp;src=sdkpreparse" class="fb-share-button">Facebook</a>
                    
            </div>            
        </main>
    )
}

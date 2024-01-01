import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme]= React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/30b1gx.jpg"
    })

    const [allMemeImages]= React.useState(memesData)

    function getmemeImg() {
        const memesArray= memesData.data.memes
        const randomNumber= Math.floor(Math.random() * memesArray.length)
        const url= memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value}= event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Top Text" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Bottom Text" 
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button className="form-btn" onClick={getmemeImg}>Get a new meme image 🖼️</button>
            </div>
            <div className="img-div">
                <img src={meme.randomImage} alt="memeImage" className="memeImage" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
    )
}
import React from 'react'

const Recipe=({recipe})=>{
    const {label,image,url,ingredients}=recipe.recipe
    
    return(
        <div className="card">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopener noreferer">Full Details</a>
            <button>Ingredients</button>
        </div>
    )
}

export default Recipe;
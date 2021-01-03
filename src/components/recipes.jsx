import React,{useState} from 'react'
// import RecipeDetails from './recipeDtails'

const Recipe=({recipe})=>{
    const {label,image,url,ingredients}=recipe.recipe
    const [show,hide]=useState(false)
    return(
        <div className="card">
            <h2>{label}</h2>
            <img src={image} alt={label}/>
            <a href={url} target="_blank" rel="noopener noreferer"><button>Get Full Details</button></a>
            {/* <button onClick={()=>hide(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients}/>} */}
        </div>
    )
}

export default Recipe;
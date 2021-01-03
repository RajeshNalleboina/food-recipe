import React from 'react'
import {v4 as uid} from 'uuid'

const RecipeDetails=({ingredients})=>{
    return (ingredients.map(ingredient=>{
        return (
        <ul key={uid()} className="ingredient">
            <li className="ingredient-list">{ingredient.text}</li>
        </ul>
        )
        }
    ))
    
}

export default RecipeDetails;
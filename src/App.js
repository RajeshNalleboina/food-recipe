import React, {useState} from 'react'
import Axios from 'axios'
import './App.css';
import Recipes from './components/recipes';
import {v4 as uid} from 'uuid'

function App() {
  // create state
  const [query,setQuery]=useState("")
  // new recipes
  const [recipes,setRecipes]=useState([])

  //Suggestions
  const [searchQuery,setSearchQuery]=useState("");
  var finalSuggestionsData;

  const [suggestion,setSuggestion]=useState([])

  // getting API_KEY
  const API_KEY="678af463eb8d4be0a119674fba1d8c3a"
  // getting API_ID
  const API_ID="cf3a2503"

  const URL=`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`

  const getData=async ()=>{
    let result= await Axios.get(URL)
    // console.log(result);
    setRecipes(result.data.hits)
    setQuery("")
  }

  const onChange=event=>{
    setQuery(event.target.value)
  }

  const onSubmit=event=>{
    event.preventDefault();
    getData();
    if(!suggestion.includes(query.toLowerCase()) && suggestion.length<5){
        suggestion.unshift(query.toLowerCase())
    } else if(suggestion.includes(query.toLowerCase())){
        suggestion.splice(suggestion.indexOf(query.toLowerCase()),1)
        suggestion.unshift(query.toLowerCase())
        // console.log(suggestion)
    } else if (suggestion.length>=5){
      suggestion.pop()
      suggestion.unshift(query.toLowerCase())
    }
    }

    let getSuggestions=(e)=>{
      setSearchQuery(e.target.value)
      // console.log(searchQuery)
    }

  return (
    <div className="App">
     <span style={{display:"none"}}>
     {
        finalSuggestionsData=suggestion.filter(item=>(
          item.indexOf(searchQuery.toLowerCase())!==-1
        ))
      }   
     </span> 
      <h1>Recipe Search</h1>
      <form className="search-from">

        <input className="textBox" type="text" placeholder="Search for recipe" autoComplete="on" onChange={onChange} value={query} onKeyUp={(event)=>{getSuggestions(event)}}/>

        <input type="submit"  className="searchButton" value="search" onClick={onSubmit}/>
      </form>.
      <ul style={{listStyleType:"none"}}> 
          {
            
            finalSuggestionsData.map(data=>(
              <li> {data} </li>
            ))
            // console.log(finalSuggestionsData)
          }
      </ul>
      <div className="container recipes">
        {recipes!=[] && recipes.map(recipe=>(
          <Recipes key={uid()} recipe={recipe}/>
          
        ))}
      </div>
    </div>
  );
}

export default App;

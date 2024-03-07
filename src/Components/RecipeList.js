import {Link} from 'react-router-dom'
import './RecipeList.css'

export default function RecipeList({recipes}) {

  if( recipes.length === 0){
    return <div className='error'>No Recipe To Load...</div>
  }

  return (
    <div className='recipe-grid'>
      {recipes.map( (recipe) => (
        <div className='card' key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} To Make</p>
            <p>{recipe.method.substring(0,100)}...</p>
            <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
        </div>
      ))}
    </div>
  )
}

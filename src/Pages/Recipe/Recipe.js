import {useParams} from 'react-router-dom'
import './Recipe.css'
import { useFetch } from '../../hook/useFetch'

export default function Recipe() {

  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data : recipe, isPending,error} = useFetch(url)

  return (
    <div  className='recipe'>
      {isPending && <div className='loading'>Loading...</div>}
      {error && <div className='error'>{error}</div>}
      { recipe && (<>
        <h1>{recipe.title}</h1>
        <p>Take {recipe.cookingTime} To Make</p>
        <ul>{
          recipe.ingredients.map( (ing,index) => (
            <li key={index}>{ing}</li>
          ))
        }</ul>
        <p>{recipe.method}</p>
      </>)}
    </div>
  )
}

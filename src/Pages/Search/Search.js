import RecipeList from '../../Components/RecipeList'
import { useFetch } from '../../hook/useFetch'
import './Search.css'
import { useLocation } from 'react-router-dom'

export default function Search() {

  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('q')

  const url = 'http://localhost:3000/recipes?q=' + name
  const {data,isPending,error} = useFetch(url)

  return (
    <div>
      <h1>Recipes Containing "{name}"</h1>
      { error && <p className='error'>{error}</p>}
      { isPending && <p className='pending'>Loading...</p>}
      { data && <RecipeList recipes={data} />}
    </div>
  )
}

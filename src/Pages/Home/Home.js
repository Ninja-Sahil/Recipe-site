import RecipeList from '../../Components/RecipeList'
import { useFetch } from '../../hook/useFetch'
import './Home.css'

export default function Home() {

  const {data,isPending,error} = useFetch('http://localhost:3000/recipes')

  return (
    <div className='home'>
      {isPending && <p className='loading'>Loading...</p>}
      {error && <p className='error'>Could Not Fetch The Data</p>}
      { data && <RecipeList recipes={data}/>}
    </div>
  )
}

import { useEffect, useRef, useState } from 'react'
import {useFetch} from '../../hook/useFetch'
import {useHistory} from 'react-router-dom'
import './Create.css'

export default function Create() {

  const [title,setTitle] = useState('')
  const [time,setTime] = useState('')
  const [method,setMethod] = useState('')
  const [newIngredient,setNewIngredient] = useState('')
  const [ingredients,setIngredients] = useState([])
  const ingredientsInput = useRef(null)
  const history = useHistory()

  const {data,postData} = useFetch('http://localhost:3000/recipes','POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({title,time : time + ' minutes',method,ingredients})
  }

  useEffect(() => {
    if(data){
      history.push('/')
    }
  },[data,history])

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim()
    if(ing && !ingredients.includes(ing)){
    setIngredients(prevIngredients => [...prevIngredients,ing])
    }
    setNewIngredient('')
    ingredientsInput.current.focus()
  }

  return (
    <div className='create'>
      <h1>Add A New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title : </span>
          <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe Time : </span>
          <input 
            type='number'
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>
        <label>
          <span>Recipe Ingredients : </span>
          <div className='ingredients'>
            <input 
              type='text'
              onChange={(e) => setNewIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientsInput}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current Ingredients : {ingredients.map(i => (<em key={i}>{i}, </em>))}</p>
        <label>
          <span>Recipe Method : </span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

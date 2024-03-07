import {Link} from 'react-router-dom'
import './Navbar.css'
import SearchBar from './SearchBar'
import {useTheme }from '../hook/useTheme'

export default function Navbar() {

  const {color} = useTheme()

  return (
    <div className='navbar' style={{background : color}}>
      <nav>
        <Link to='/' className='brand'>
            <h1>Coading Ninja</h1>
        </Link>
        <SearchBar />
        <Link to='/create' >Create Recipe</Link>
      </nav>
    </div>
  )
}

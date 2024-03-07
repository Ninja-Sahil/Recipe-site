import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'
import Recipe from './Pages/Recipe/Recipe'
import Create from './Pages/Create/Create'
import Navbar from './Components/Navbar'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/search'>
            <Search />
          </Route>
          <Route path='/create'>
            <Create />
          </Route>
          <Route path='/recipe/:id'>
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

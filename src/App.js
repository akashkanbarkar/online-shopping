import HomePage from './pages/homepage/homepage.component'
import {Route,Switch} from 'react-router-dom'
import './App.css'

const hatsPage = ()=> (
  <div>
    Hats Page
  </div>
)
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={hatsPage}/>
      </Switch>
     
    </div>
  );
}

export default App;

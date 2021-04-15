import HomePage from './pages/homepage/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import  Header  from "./components/header/header.component";
import SignIn from './pages/sign-in/sign-in.component'
import {Route,Switch} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
     
    </div>
  );
}

export default App;

import React, { Component } from 'react';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignIn from './pages/sign-in/sign-in.component'
import { Route, Switch } from 'react-router-dom'
import { auth } from './firebase/firebase.util'
import './App.css'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentUser: ""
    }

  }

  unsubscribeFromAuth=null

  componentDidMount() {
    this.unsubscribeFromAuth=auth.onAuthStateChanged((user) => {
      this.setState({ currentUser:user })
      console.log(this.state.currentUser)

    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/shop' component={ShopPage} />
        </Switch>

      </div>
    );
  }

}

export default App;

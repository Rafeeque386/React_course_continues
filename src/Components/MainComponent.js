import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from 'reactstrap';
import {NavbarBrand} from 'reactstrap';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import '../App.css';
import Home from './HomeComponent';
import {Route,Switch,Redirect} from 'react-router-dom';



class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      
    };
}
   

  render(){
    const HomePage= ()=>{
      return(
        <Home/>
      )
    }
  return (
    
<div>
  <Header/>
     <Switch>
      <Route path='/Home' component={HomePage}/>
      <Route exact path="/Menu" component={() => <Menu dishes={this.state.dishes} />} />
      <Redirect to='/Home' />
   </Switch>
   <Footer/>
    </div>
  );
};
}

export default Main;

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



class Main extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    };
}
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
    }


  render(){
  return (
    
<div>
      <Header/>
      <Menu dishes={this.state.dishes} onClick={(dishId)=>this.onDishSelect(dishId)} />
      <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    <Footer/>
    </div>
  );
};
}

export default Main;

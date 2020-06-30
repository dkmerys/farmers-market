import React from 'react';
import {January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
} from './ProductList';

class ProductAvailability extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: null
    };
  }

  handleClick =(month) => {
    this.setState({selectedMonth: month});
  };

  render(){
    let currentlyVisibleState = null
    if (this.state.selectedMonth === "january") {
      currentlyVisibleState = <January />
    }else if(this.state.selectedMonth ==='february'){
      currentlyVisibleState = <February />
    }else if(this.state.selectedMonth ==='march'){
      currentlyVisibleState = <March />
    }else if(this.state.selectedMonth ==='april'){
      currentlyVisibleState = <April />
    }else if(this.state.selectedMonth ==='may'){
      currentlyVisibleState = <May />
    }else if(this.state.selectedMonth ==='june'){
      currentlyVisibleState = <June />
    }else if(this.state.selectedMonth ==='july'){
      currentlyVisibleState = <July />
    }else if(this.state.selectedMonth ==='august'){
      currentlyVisibleState = <August />
    }else if(this.state.selectedMonth ==='september'){
      currentlyVisibleState = <September />
    }else if(this.state.selectedMonth ==='october'){
      currentlyVisibleState = <October/>
    }else if(this.state.selectedMonth ==='november'){
      currentlyVisibleState = <November />
    }else if(this.state.selectedMonth ==='december'){
      currentlyVisibleState = <December />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={() => {this.handleClick("january")}}>January</button>
        <button onClick={() => {this.handleClick("february")}}>February</button>
        <button onClick={() => {this.handleClick("march")}}>March</button>
        <button onClick={() => {this.handleClick("april")}}>April</button>
        <button onClick={() => {this.handleClick("may")}}>May</button>
        <button onClick={() => {this.handleClick("june")}}>June</button>
        <button onClick={() => {this.handleClick("july")}}>July</button>
        <button onClick={() => {this.handleClick("august")}}>August</button>
        <button onClick={() => {this.handleClick("september")}}>September</button>
        <button onClick={() => {this.handleClick("october")}}>October</button>
        <button onClick={() => {this.handleClick("november")}}>November</button>
        <button onClick={() => {this.handleClick("december")}}>December</button>
      </React.Fragment>
    );
  }
}

export default ProductAvailability;
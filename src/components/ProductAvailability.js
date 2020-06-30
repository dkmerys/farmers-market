import React from 'react';
import January from './ProductList';

class ProductAvailability extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "january"
    };
  }

  // handleClick = (month) => {
  //   this.setState({selectedMonth: month});
  // };

  render(){
    let currentlyVisibleState = null
    if (this.state.selectedMonth === "january") {
      currentlyVisibleState = <January />
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        {/* <button onClick={this.handleClick("january")}>January</button> */}
      </React.Fragment>
    );
  }
}

export default ProductAvailability;
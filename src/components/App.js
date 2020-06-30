import React from 'react';
import Header from './Header';
import Schedule from './Schedule';
import ProductAvailability from './ProductAvailability';

function App(){
  return(
    <React.Fragment>
      <Header />
      <Schedule />
      <ProductAvailability />
    </React.Fragment>
  );
}

export default App;

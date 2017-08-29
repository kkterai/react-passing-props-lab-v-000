import React, { Component } from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';



const FruitBasket = () => {
      return (
        <div className="fruit-basket">
          <FilteredFruitList />
          <Filter />
        </div>
      );
  }
  
FruitBasket.defaultProps = {
  fruit: "",
  filters: [],
  currentFilter: "",
  updateFilterCallback: ""
}

export default FruitBasket;

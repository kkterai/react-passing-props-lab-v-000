import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';


const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  updateFilterCallback
  }) => {
      return (
        <div className="fruit-basket">
          <FilteredFruitList 
            filter={currentFilter} 
            fruit={fruit} />
          <Filter 
            handleChange={updateFilterCallback} 
            filters={filters} />
        </div>
      );
  }
  
FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
}

export default FruitBasket;

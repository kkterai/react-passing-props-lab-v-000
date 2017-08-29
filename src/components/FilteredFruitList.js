import React from 'react';

const FilteredFruitList = ({
  fruit,
  filter
}) => {  
  const list = !filter ? fruit : fruit.filter(i => i.fruit_type == filter);
  debugger
      return (
        <ul className="fruit-list">
           {list.map((item, index) => <li key={index}>{item.char}</li>)}
        </ul>
      )
  }
  
FilteredFruitList.defaultProps = {
  fruit: [],
  filter: ""
}

export default FilteredFruitList;

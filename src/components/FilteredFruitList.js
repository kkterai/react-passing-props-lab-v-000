import React, { Component } from 'react';

const FilteredFruitList = () => {  

  const list = !this.props.filter ? this.props.fruit : this.props.fruit.filter(i => i.fruit_type === this.props.filter);
  
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

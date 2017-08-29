import React, { Component } from 'react';

const Filter = () => {
  return (
    <select onChange={this.props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {this.props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  filters: [],
  handleChange: ""
}

export default Filter;
import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
    constructor() {
        super();

        this.state = {
            fruit: [],
            filters: [],
            currentFilter: null
        }

        this.handleChange = this.handleChange.bind(this)
        this.fetchFilters = this.fetchFilters.bind(this);
        this.fetchFruit = this.fetchFruit.bind(this);
    }

    handleChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    componentWillMount() {
        this.fetchFilters();
        this.fetchFruit();
    }
    
    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }    

    fetchFruit = () => {
        fetch('/api/fruit')
            .then(response => response.json())
            .then(fruit => this.setState({ fruit }));
    }

    render() {
        return (
            <div>
                <FruitBasket 
                    updateFilterCallback={this.handleChange}
                    fruit={this.state.fruit}
                    filters={this.state.filters}
                    currentFilter={this.state.currentFilter}
                />
            </div>
        )
    }
};

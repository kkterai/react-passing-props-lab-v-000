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

        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange = event => {
        console.log('new filter: ', event.target.value);
        this.setState({ currentFilter: event.target.value });
    }

    componentWillMount() {
        this.fetchFilters();
    }
    
    fetchFilters = () => {
        fetch('/api/fruit_types')
            .then(response => response.json())
            .then(filters => this.setState({ filters }));
    }    

    render() {
        return (
            <div>
                <FruitBasket onChange={this.handleFilterChange}/>
            </div>
        )
    }
};

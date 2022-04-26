import React, { Component } from 'react';
import axios from 'axios';

class Example extends Component {
  state = {
    seenIndexes: [],
    values: [],
    index: '',
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/person/all');
    console.log(`fetched values: ${JSON.stringify(values.data)}`);
    this.setState({ values: values.data });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('/api/values', {
      index: this.state.index,
    });
    this.setState({ index: '' });
  };

  render() {
    return (
      <div>
        <h3>Calculated Values:</h3>
        {this.values.map((value, index) => {
          return <div key={index}>{value.name}</div>
        })}
      </div>
    );
  }
}

export default Example;

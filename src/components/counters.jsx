import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 5 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 },
    ]
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters })
  }

  addCounter = () => {
    let counters = this.state.counters;
    let lastCounter = counters[counters.length - 1];
    if (lastCounter !== undefined) {
      let lastCounterId = lastCounter.id;
      counters.push({ id: lastCounterId + 1, value: 0 })
    } else {
      counters.push({ id: 1, value: 0 })
    }
    this.setState({ counters })
  }

  render() {
    return (<div>
      {this.state.counters.map(counter => (<Counter key={counter.id} onDelete={this.handleDelete} id={counter.id} value={counter.value} />))}
      <button onClick={this.addCounter} className='btn btn-info btn-sm mg-2'>Add Counter</button>
    </div>);
  }
}

export default Counters;
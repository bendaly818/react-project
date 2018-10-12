import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    }

    handleDecrement = () => {
        if (this.state.count === 0) return null;
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleDecrement} className='btn btn-secondary btn-sm m-1'>-</button>
                <button onClick={this.handleIncrement} className='btn btn-secondary btn-sm m-1'>+</button>
                <button onClick={() => this.props.onDelete(this.props.id)} className='btn btn-danger btn-sm m-1'>Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;
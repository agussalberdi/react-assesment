import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterPopulation } from '../actions/actions';

export class Filters extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      weight: '',
      height: '',
      hair: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this); 
    this.resetInputs = this.resetInputs.bind(this);
  }  

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const filter = {
      name: this.state.name,
      age: this.state.age,
      weight: this.state.weight,
      height: this.state.height,
      hair_color: this.state.hair
    };

    this.props.filterPopulation(filter);
  }

  resetInputs(e) {
    e.preventDefault();

    this.setState({
        name : '',
        age: '',
        weight: '',
        height: '',
        hair_color: ''
    });
  }

  render() {
    return(
      <div>
        <p>Are you looking for someone in the town?</p>
        <form onSubmit={this.onSubmit} id="filterForm">
          <input type="text" name="name" onChange={this.onChange} value={this.state.name} placeholder="Name"></input>
          <input type="number" name="age" onChange={this.onChange} value={this.state.age} placeholder="Age" min="0"></input>
          <input type="number" name="weight" onChange={this.onChange} value={this.state.weight} placeholder="Weight" min="0"></input>
          <input type="number" name="height" onChange={this.onChange} value={this.state.height} placeholder="Height" min="0"></input>
          <input type="text" name="hair" onChange={this.onChange} value={this.state.hair} placeholder="Hair Color"></input>
          <button type="submit" className="button">Search</button>
          <button onClick={this.resetInputs} className="button">Reset</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps, { filterPopulation })(Filters)
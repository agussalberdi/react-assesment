import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showPopulation } from '../actions/actions';
import Table from 'react-bootstrap/Table';

class List extends Component {
  componentWillMount() {
    this.props.showPopulation()
  }

  renderList() {
    let data = this.props.population;
    
    if (data.length){
      return data.map((gnome) => {
        return (
          <tr key={gnome.id}>
            <td className="name"><img src={gnome.thumbnail}></img>{gnome.name}</td>
            <td>{gnome.age}</td>
            <td>{gnome.weight}</td>
            <td>{gnome.height}</td>
            <td>{gnome.hair_color}</td>
          </tr>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <Table responsive hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Weight</th>
                <th>Height</th>
                <th>Hair</th>
              </tr>
            </thead>
            <tbody>
              {this.renderList()}
            </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProp(state){
  const population = state.population.list;
  const filters = state.population.filters;
  let items = [];

  if (population.Brastlewark){
    items = population.Brastlewark;
  }

  return {
    population: items.filter(g => {
      let ok = true;
      Object.keys(filters).forEach(key => {
        if(("" + g[key]).toLowerCase().indexOf(filters[key].toLowerCase()) != 0)
            ok = false;  
      })
      return ok;
    })
  };
}
export default connect(mapStateToProp, { showPopulation })(List)
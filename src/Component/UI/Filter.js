import React from "react";

export class Filter extends React.Component {
  state = {
    selectedFilter:"",
    filterText:"",
  }

  handleSelect = (e) => {
    this.setState({selectedFilter: e.target.value})
  }

  render() {
    const {filters} = this.props;

    return (
      <form>
        <select
          onChange={this.handleSelect}
          value={this.state.selectedFilter}
        >
          <option value="">
            choose a filter
          </option>
          {filters.map((filter) => (
            <option value={filter} key={filter}>
              {filter}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="type text"
          value={this.state.filterText}
          onChange={(e) => this.setState({filterText: e.target.value})}
        />
        <button
          type="button"
          onClick={() => this.props.onFilterApply(this.state, true)}
        >
          filter
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.onFilterApply(this.state, false)
            this.setState({ 
              selectedFilter:"",
              filterText:"",
            })
          }}  
        >
          reset
        </button>
      </form>
    )
  }
}
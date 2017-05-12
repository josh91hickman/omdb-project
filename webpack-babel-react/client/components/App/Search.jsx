import React, { Component } from 'react';
import { default as swal } from 'sweetalert2';
import errors from '../../utils/errors';

const searchError = errors.searchError;

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const searchTerm = this.state.value;
    if (!searchTerm) {
      swal(searchError);
    }
    console.log(searchTerm);

    this.setState({
      value: '',
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-group input-group-lg">
          <input
            type="text"
            value={this.state.value}
            className="form-control"
            placeholder="Toy Story 3"
            onChange={this.handleInputChange}
          />
          <button type="submit" className="btn btn-primary search">Find Movies!</button>
        </div>
      </form>
    );
  }
}

export default SearchBar;

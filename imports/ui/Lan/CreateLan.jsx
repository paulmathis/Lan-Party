import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateLan extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      date: '',
      time: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    console.log(evt.target);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="createLanName">
            Lan Name<input onChange={this.handleChange} type="text" name="name" id="createLanName" />
          </label>

          <label htmlFor="createLanDate">
            Date<input onChange={this.handleChange} type="date" name="date" id="createLanDate" />
          </label>

          <label htmlFor="createLanTime">
            Time<input onChange={this.handleChange} type="time" name="time" id="createLanTime" />
          </label>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

CreateLan.propTypes = {};

export default CreateLan;

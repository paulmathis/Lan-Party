import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Lans from '../../api/Lans.js';

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
    const { date, time, name } = this.state;
    const datetime = new Date(`${date} ${time}`);
    Lans.insert({
      name,
      datetime,
      steamId: [this.props.currentUser.profile.id],
      owner: this.props.currentUser.profile.id,
    });
  }

  render() {
    // keep submit button disabled until all 3 fields have input
    const { name, date, time } = this.state;
    const disabled = name === '' || date === '' || time === '';

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

          <input type="submit" disabled={disabled} value="Submit" />
        </form>
      </div>
    );
  }
}

CreateLan.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default createContainer(
  () => ({
    currentUser: Meteor.user(),
  }),
  CreateLan,
);

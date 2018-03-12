import React, { Component } from 'react';

export default class User extends Component {
  constructor() {
    super();

    this.state = { user: {} }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return this.props.handleClick((err, data) => {
      this.setState({ user: data });
    });
  }

  render() {
    return (
      <div className="main">
        <button className="btn btn-success" onClick={ this.handleClick }>Show User Details</button>
        <div className="clearfix"></div>
        <div className="titles">Name:</div>
        <div className="user_info username">
          <span ref="username" username={ this.state.user.username }>{ this.state.user.username }</span>
        </div>
        <div className="titles">Type of Contract:</div>
        <div className="user_info">
        Consultant: <input type="radio"
                           ref="consultant"
                           name="contract"
                           value={ (this.state.user.contract === 'Consultant').toString() }
                           checked={ this.state.user.contract === 'Consultant' }/>&nbsp;
        Parmanent: <input type="radio"
                           ref="parmanent"
                           name="contract"
                           value={ (this.state.user.contract === 'Parmanent').toString() }
                           checked={ this.state.user.contract === 'Parmanent' }/>
        </div>
        <div className="titles">Country of Residence:</div>
        <div className="user_info">
          <select ref="country" value={ this.state.user.country }>
            <option value="ae">United Arab Emirates</option>
            <option value="ng">Nigeria</option>
            <option value="uk">United Kingdom</option>
            <option value="us">United States of America</option>
          </select>
        </div>
      </div>
    )
  }
}

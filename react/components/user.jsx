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
      <div>
        <br />
        <button onClick={ this.handleClick }>Show User Details</button><br /><br />
        Name:<span ref="username" username={ this.state.user.username }>{ this.state.user.username }</span><br /><br />
        Type of Contract:&nbsp;
        Consultant: <input type="radio"
                           ref="consultant"
                           name="contract"
                           value={ (this.state.user.contract === 'Consultant').toString() }
                           checked={ this.state.user.contract === 'Consultant' }/>&nbsp;
        Parmanent: <input type="radio"
                           ref="parmanent"
                           name="contract"
                           value={ (this.state.user.contract === 'Parmanent').toString() }
                           checked={ this.state.user.contract === 'Parmanent' }/><br /><br />
        Country of Residence:&nbsp;
        <select ref="country" value={ this.state.user.country }>
          <option value="ae">United Arab Emirates</option>
          <option value="ng">Nigeria</option>
          <option value="uk">United Kingdom</option>
          <option value="us">United States of America</option>
        </select>
      </div>
    )
  }
}

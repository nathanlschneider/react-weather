import React, { Component } from 'react';
import './Location.scss';

export default class Location extends Component {
  constructor(props) {
    super(props);
    this.handleSaveZip = this.handleSaveZip.bind(this);
  }

  handleSaveZip() {
    console.log(this.props.input);
  }

  render() {
    return <div className='location__form'>{this.props.form}</div>;
  }
}

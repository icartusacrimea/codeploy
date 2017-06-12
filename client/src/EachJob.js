import React, { Component } from 'react';
import utils from './utils';

class EachJob extends Component {
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleViewJob(this.props.row);
    return;
  }
  render() {
    let row = this.props.row;

    return (
      <tr>
        <td>{row.jobPosition}</td>
        <td>{row.companyName}</td>
        <td>{utils.formattedDate(row.dateApplied)}</td>
        <td><a onClick={this.handleClick}>View Resources</a></td>
        <td>{row.comments}</td>
      </tr>
    );
  }
}

module.exports = EachJob;
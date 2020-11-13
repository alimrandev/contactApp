import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Contact extends Component {
  state = {
    toggleContact: false,
  };
  // handle edit function
  handleEdit = (id) => () => {
    this.props.editContact(id);
  }

  handleDelete = (id) => () => {
    this.props.deleteContact(id);
  };
  handleToggleContact = () => {
    this.setState({
      toggleContact: !this.state.toggleContact
    });
  };
  render() {
    const {
      id,
      firstName,
      lastName,
      phone,
      email,
      contactType,
    } = this.props.contact;
    return (
      <div className="card">
        <div className="card-content">
          <span className="card-title">
            {firstName}
            {lastName}
            <a href="#!" onClick={this.handleToggleContact}>
              <i className="small material-icons right">arrow_drop_down</i>
            </a>
            <Link to={`/edit/${id}`} onClick={this.handleEdit(id)}>
            <i className="small material-icons right">create</i>
            </Link>
            <a href="#!" onClick={this.handleDelete(id)}>
              <i className="small material-icons right">delete</i>
            </a>
          </span>
          {this.state.toggleContact && (
            <React.Fragment>
              <p>{phone}</p>
              <p>{email}</p>
              <p>{contactType}</p>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Contact;

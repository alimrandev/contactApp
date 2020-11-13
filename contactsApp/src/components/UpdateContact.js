import React, { Component } from "react";
import validator from "validator";

class UpdateContact extends Component {
  // define state for control form
  state = {
    id: this.props.toEditContact.id,
    firstName: this.props.toEditContact.firstName,
    lastName: this.props.toEditContact.lastName,
    email: this.props.toEditContact.email,
    phone: this.props.toEditContact.phone,
    profession: this.props.toEditContact.profession,
    contactType: this.props.toEditContact.contactType,
    errors: {},
  };
  // define a handler function
  handleChange = (e) => {
    // change the state from form value
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (this.state.id !== nextProps.toEditContact.id) {
      this.setState({
        id: nextProps.toEditContact.id,
        firstName: nextProps.toEditContact.firstName,
        lastName: nextProps.toEditContact.lastName,
        email: nextProps.toEditContact.email,
        phone: nextProps.toEditContact.phone,
        profession: nextProps.toEditContact.profession,
        contactType: nextProps.toEditContact.contactType,
        errors: {},
      });
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.firstName === "") {
      this.setState({
        errors: {
          firstName: "Please Provide First Name",
        },
      });
      return;
    }
    if (this.state.lastName === "") {
      this.setState({
        errors: {
          lastName: "Please Provide Last Name",
        },
      });
      return;
    }
    if (this.state.email === "" || !validator.isEmail(this.state.email)) {
      this.setState({
        errors: {
          email: "Please Provide valid email",
        },
      });
      return;
    }
    if (this.state.phone === "") {
      this.setState({
        errors: {
          phone: "Please Provide Phone",
        },
      });
      return;
    }
    if (this.state.profession === "") {
      this.setState({
        errors: {
          profession: "Please Provide Profession",
        },
      });
      return;
    } else {
      this.setState({
        errors: {},
      });
    }
    this.props.updateContact(this.state);
    this.props.history.push('/')
  };

  render() {
    return (
      <React.Fragment>
        <h3>Update Contact</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <span className="helper-text">
              {this.state.errors.firstName && this.state.errors.firstName}
            </span>
            <input
              type="text"
              id="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              placeholder="First Name"
              className="autocomplete"
              name="firstName"
            />
          </div>
          <div className="input-field col s12">
            {this.state.errors.lastName && this.state.errors.lastName}
            <input
              type="text"
              id="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              placeholder="Last Name"
              className="autocomplete"
              name="lastName"
            />
          </div>
          <div className="input-field col s12">
            {this.state.errors.email && this.state.errors.email}
            <input
              type="text"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="email"
              className="autocomplete"
              name="email"
            />
          </div>
          <div className="input-field col s12">
            {this.state.errors.email && this.state.errors.email}
            <input
              type="text"
              id="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder="Phone"
              className="autocomplete"
              name="phone"
            />
          </div>
          <div className="input-field col s12">
            {this.state.errors.profession && this.state.errors.profession}
            <input
              type="text"
              id="profession"
              value={this.state.profession}
              onChange={this.handleChange}
              placeholder="Profession"
              className="autocomplete"
              name="profession"
            />
          </div>
          <div className="input-field col s12">
            <p>
              <label>
                <input
                  type="radio"
                  name="contactType"
                  value="personal"
                  onChange={this.handleChange}
                  checked={this.state.contactType === "personal"}
                  id="personal"
                />
                <span>Personal</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="contactType"
                  value="professional"
                  onChange={this.handleChange}
                  checked={this.state.contactType === "professional"}
                  id="professional"
                />
                <span>Professional</span>
              </label>
            </p>
          </div>
          <button type="submit" id="submit" className="btn">
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}

export default UpdateContact;

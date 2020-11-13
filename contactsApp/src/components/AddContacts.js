import React, { Component } from "react";
import validator from 'validator';

class AddContacts extends Component {
  // define state for control form
  state = {
    id: this.props.contacts.length + 'A',
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    contactType: "personal",
    errors: {},
  };
  
  // define a handler function
  handleChange = (e) => {
    // change the state from form value
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  clearField = () => {
    this.setState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    profession: "",
    contactType: "personal",
    errors: {},
    })
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
    this.setState({
      id : this.props.contacts.length+1
    })
    this.props.addContact(this.state);
    this.props.history.push('/');
  };
  
  render() {
    
    return (
      <React.Fragment>
        <h3>Contact Form</h3>
        <form onSubmit={this.handleSubmit}>
          <div className="input-field col s12">
            <label htmlFor="firstName">First Name</label>
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
            <label htmlFor="lastName">Last Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="phone">Phone</label>
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
            <label htmlFor="profession">Profession</label>
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

export default AddContacts;

import React, { Component } from "react";
import Contact from "./Contact";

class Contacts extends Component {
  state = {
    searchText : '',
  }
  handelChange = (e) => {
    this.setState({
      searchText: e.target.value 
    })
  }
  render() {
    const filteredContact = this.props.contacts.filter((contact => 
      contact.firstName.toLowerCase().indexOf(this.state.searchText) !== -1 || contact.lastName.toLowerCase().indexOf(this.state.searchText)  !== -1));
    return (
      <React.Fragment>
        <h3>Contacts</h3>
        <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input id="search" type="search" required 
                value = {this.state.searchText}
                onChange = {this.handelChange}
              />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>
        <div className="row">
          {filteredContact.map((contact) => (
            <div className="col s6" key={contact.id}>
              <Contact contact={contact} deleteContact={this.props.deleteContact} editContact={this.props.editContact}/>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Contacts;

import React, { Component } from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import About from './About';
import AddContacts from "./AddContacts";
import Contacts from "./Contacts";
import Header from "./Header";
import UpdateContact from "./UpdateContact";
import NotFound from "./NotFound";

class App extends Component {
  state = {
    contacts : [
      {
        id: 1,
        firstName: 'Abdullah',
        lastName : 'Imran',
        phone: '01852172823',
        email : 'abdlimran.texbd@gmail.com',
        profession: 'web developer',
        contactType : 'personal'
      },
      {
        id: 2,
        firstName: 'Imran',
        lastName : 'Imran',
        phone: '01852172823',
        email : 'Imran.texbd@gmail.com',
        profession: 'web developer',
        contactType : 'personal'
      },
    ],
    editStateContact : null
  };
  addContact = (contact) => {
    this.setState({
      contacts : [...this.state.contacts, contact]
    })
  }
  deleteContact = (id) => {
    const updateContact = this.state.contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts : updateContact
    })
  }
  //edit contact
  editContact = (id) => {
    const toEditContact = this.state.contacts.find((contact) => contact.id === id);
    this.setState({
      editStateContact: toEditContact
    })
  }
  updateContact = (updateContact) => {
    const updatedContacts = this.state.contacts.map(contact => contact.id === updateContact.id ? contact = updateContact : contact)
    this.setState({
      contacts: updatedContacts,
      editStateContact : null
    })

  }
  render() {
    return (
      <React.Fragment>
        <Header/>
        <div className="container">
          <div className="row">
          <Switch>
          <Route path='/' exact render={
            (props) => <Contacts 
            contacts = {this.state.contacts} 
            deleteContact = {this.deleteContact} 
            editContact={this.editContact}
            {...props}
            />
          }/>
          <Route path ='/add' render={
              (props) => <AddContacts 
              addContact={this.addContact} 
              contacts={this.state.contacts} 
              {...props}
              />
          }/>
          <Route path='/edit/:id' render={
            (props) => this.state.editStateContact ? (<UpdateContact 
            toEditContact={this.state.editStateContact} 
            updateContact={this.updateContact} {...props}/>) :
            <Redirect to="/"/>
          }/>
          <Route path='/about' component={About}/>
          <Route component={NotFound}/>
          </Switch>
          </div>
        </div>
        {/* {<Header />
        <div className="container">
          <div className="row">
            <div className="col m4 s12">
              {
                this.state.editStateContact ? <UpdateContact toEditContact={this.state.editStateContact} updateContact={this.updateContact}/> : 
                <AddContacts addContact={this.addContact} contacts={this.state.contacts}/>
              }
              
            </div>
            <div className="col m8 s12">
              <Contacts contacts = {this.state.contacts} deleteContact = {this.deleteContact} editContact={this.editContact}/>
            </div>
          </div>
        </div>} */}
      </React.Fragment>
    );
  }
}

export default App;

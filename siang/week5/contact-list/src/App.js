import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import ContactLists from './components/ContactLists';
import Header from './components/Header';
import EditContact from './components/EditContact';

function App() {
  const [contacts, setContacts] = useState([])

  const retrieveData = async() => {
    const res = await axios.get('http://localhost:3004/contacts')
    return res.data //data akan muncul
  }

  const deleteData  = async(id) => {
    await axios.delete(`http://localhost:3004/contacts/${id}`)
    const newLists = contacts.filter((contact) => contact.id !== id )
    setContacts(newLists)
  }

  const updateHandlerContact = async(contact) => {
    const res = await axios.put(`http://localhost:3004/contacts/${contact.id}`, contact)
    const {id, name, email} = res.data
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? {...res.data} : contact //true
      })
    )
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveData()
      if(allContacts) setContacts(allContacts)
    }

    //call data
    getAllContacts()
  }, [])

  useEffect(() => {

  }, [contacts])

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route 
            path="/" //contact lists
            exact
            render={(props) => (
              <ContactLists 
                {...props}
                contacts={contacts}
                onDelete={deleteData}
              />
            )}  
          />
          <Route 
            path="/add" //add contact
            exact
            // render={(props) => (
            //   //
            // )}  
          />
          <Route 
            path="/edit" //edit contat
            exact
            render={(props) => (
              <EditContact
                {...props} 
                updateHandler={updateHandlerContact}
              />
            )}  
          />
          {/* <Route path="contact/:id" component={}/> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

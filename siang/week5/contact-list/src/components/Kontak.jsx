import React from 'react'
import {Link} from 'react-router-dom'

export default function Kontak(props) {
  console.log(props);
  const {id, name, email} = props.contact
  return (
    <div className="item">
      <div className="header">{name}</div>
      <div>{email}</div>
      <button onClick={() => props.klikDelete(id)}>Remove</button>
      <Link to={{pathname:`/edit`, state:{contact: props.contact}}}>
        <button>Edit</button>
      </Link>
      {/* {contacts.map((contact => 
        <ul>
          <li key={contact.id}>{contact.name}</li>
          <button onClick={() => onDelete(contact.id)}>Remove</button>
          <Link to={{pathname:`/edit`, state:contact}}>
            <button>Edit</button>
          </Link>
        </ul>
        ))} */}
    </div>
  )
}

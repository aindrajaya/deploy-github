import React from 'react'
import { Link } from 'react-router-dom'
import Kontak from './Kontak'

export default function ContactLists({contacts, onDelete}) {
  // console.log(props.contacts);

  console.log(contacts)
  const renderedKontak = contacts.map((contact) => {
    return(
      <Kontak
        contact={contact}
        klikDelete={onDelete}
      />
    )
  })

  return (
    <div>
      <h1>List Contact</h1>
      <button>Add Kontak</button>
      <div className="ui celled list">{renderedKontak}</div>
    </div>
  )
}

import React, {Fragment, useEffect, useState } from 'react'
// import { addPosts, getPosts } from '../api/GetUser'

export default function AddAnggota() {
  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [anggota, setAnggota] = useState([])
  // const [posts, setPosts] = useState([])

  const getAnggota = async () => {
    await fetch('http://localhost:3004/anggota')
    .then(res => res.json())
    .then(data => setAnggota(data))
  }

  useEffect(() => {
    getAnggota()
  })


  const addAnggota = async () => {
    try{
      await fetch('http://localhost:3004/anggota', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nama: nameValue,
          email: emailValue
        })
      })
    }catch(err){
      console.log(err)
    }
  } 

  return (
    <div className='App'>
      <input 
        onChange={e => setNameValue(e.target.value)}
        type='text'
        placeholder='masukan nama'
      />
      <input 
        onChange={e => setEmailValue(e.target.value)}
        type='text'
        placeholder='masukan email'
      />
      <button onClick={addAnggota}>Add Anggota</button>
      <hr />
      <ol>
        {anggota.map((nm, id) => (
          <li key={id}>{nm.nama} {nm.email}</li>
        ))}
      </ol>
    </div>
  )
}

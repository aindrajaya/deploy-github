import React, {useState, useEffect} from 'react'

export default function SearchVariant() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    setTimeout(() => {
      setUser({
        name: "Rudi"
      })
    }, 1000)
  })

  return (
    <div>
      {user ? <p>Selamat datang, {user.name}</p> : <p>Anda belum Login</p>}
    </div>
  )
}

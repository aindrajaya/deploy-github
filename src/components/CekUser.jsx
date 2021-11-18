import React, { useEffect, useState } from 'react'

export default function CekUser() {
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
      {user ? <p>Selamat datang, {user.name}</p> : "Anda belum login"}
    </div>
  )
}

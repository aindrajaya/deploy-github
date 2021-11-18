//TransferApp
import React, {useEffect, useState} from 'react'
import {Card, Button, Stack} from 'react-bootstrap'

export default function TransferApp() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    document.title = `Saldo anda Rp. ${balance}`
  },[balance])

  const tambah = (value) => {
    alert(`anda menambah sejumlah Rp. ${value}, maka saldo sekarang menjadi Rp. ${balance + value}`)
    setBalance(balance + value)
  }

  const tarik = (value) => {
    const confirmation = window.confirm('Apakah anda yakin?')
    if(confirmation && balance > 0){
      alert(`anda menarik sejumhal Rp. ${value} maka saldo anda sekarang Rp. ${balance - value}`)
      setBalance(balance - value)
    }else {
      alert('Ga jadi atau saldo ga cukup')
    }
  }

  return (
    <div className="container">
    <div className="row align-items-start">
      <div className="col"></div>
      <div className="col">
      <Card style={{ width: '18rem' }}>
        <Card.Body className="">
          <Card.Title>Saldo App</Card.Title>
          <Card.Text>
            <h4>Saldo anda adalah Rp. {balance}</h4>
          </Card.Text>
          <Stack gap={2} className="col-md-5 mx-auto">
          <Button onClick={() => tambah(1000)} variant="primary">Tambah 1000</Button>
          <Button onClick={() => tambah(5000)} variant="success">Tambah 5000</Button>
          <Button onClick={() => tarik(1000)} variant="danger">Tarik 1000</Button>
          </Stack>
        </Card.Body>
      </Card>
      </div>
      <div className="col"></div>
    </div>
  </div>
  )
}

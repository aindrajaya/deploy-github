import React, {useEffect, useState} from 'react'
import {Card, Button, Stack} from 'react-bootstrap'

export default function HooksComponent() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Anda sudak klik ke ${count}`
    console.log('componentDidMount')
  }, [console.log('componentDidUpdate')])

  // useEffect(() => {
  //   console.log('componentDidMount')
  //   return () => {
  //     console.log('compoenntWillUnmout')
  //   }
  // },[console.log('componentDidUpdate')])


  const increment = (value) => {
    setCount(count + value)
  }

  const decrement = (value) => {
    setCount(count - value)
  }

  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col"></div>
        <div className="col">
        <Card style={{ width: '18rem' }}>
          <Card.Body className="">
            <Card.Title>Counter App</Card.Title>
            <Card.Text>
              <h1>{count}</h1>
            </Card.Text>
            <Stack gap={2} className="col-md-5 mx-auto">
            <Button onClick={() => increment(1)} variant="primary">Increment</Button>
            <Button onClick={() => decrement(1)} variant="primary">Decrement</Button>
            </Stack>
          </Card.Body>
        </Card>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}
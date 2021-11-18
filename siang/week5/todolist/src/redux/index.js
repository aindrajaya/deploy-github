import React from 'react'
import { Provider } from 'react-redux'
import CounterAppRedux from './CounterApp'
import store from './store'

export default function ReduxCounter() {
  return (
    <Provider store={store}>
      <CounterAppRedux />
    </Provider>
  )
}

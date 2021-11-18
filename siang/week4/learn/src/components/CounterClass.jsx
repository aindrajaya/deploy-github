import { Component, Fragment } from 'react' //ini untuk memanggil object dari react
import {CounterPlace} from './ChildCounter'

class CounterClass extends Component {
  constructor(){
    super()
    this.state = {
      count : 5
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count -1
    })
  }

  render(){
    const {count} = this.state //desctructuring state
    const {increment, decrement} = this //destructuring method/function

    return(
      <Fragment>
        <CounterPlace count={count} color="red" increment={increment} decrement={decrement}/> count akan send state ke child CounterPlace
        {/* <CounterPlace count="FE Kelas siang Masuk Pagi" color="blue"/> */}
      </Fragment> 
    )
  }
}

export default CounterClass
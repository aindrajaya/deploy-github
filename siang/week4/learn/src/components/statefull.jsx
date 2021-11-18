import { Component, Fragment } from "react"; //manggil component lib dari react
import { Header1, Header4 } from "./stateless";

//statefull atau biasa dipanggil class component
export default class StateFull extends Component {
  constructor(){
    //statefull
    super()
    //ini state / data yang diolah
    this.state = { //state sebagai object yang berisi data
      name : "Binar Academy x Glints",
      count: 0,
      listNames: ["Rudi", "Edi", "Yudi"]
    }
  }


  changeName = () => {
    this.setState({
      name: 'ubah'
    })
  }

  //method/function
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  changeNameDbl = () => {
    this.setState({
      name: "Binar Academy x Glints"
    })
  }
 
  render(){
    const listNames = this.state.listNames

    return(
      <Fragment>
        {/* <h1>{this.state.name}</h1> */}
        <Header1 name={this.state.name}/>
        {/* <h4>{this.state.count}</h4> */}
        <Header4 count={this.state.count}/>
        <button onClick={this.changeName} onDoubleClick={this.changeNameDbl}>ubah</button>
        <button onClick={this.increase}>plus</button>
        <button onClick={this.decrease}>min</button>
        {listNames.map((name, id) =>
          <div key={id}>
            {name}
          </div>
          )}
      </Fragment>
    )
  }
}

// export default StateFull //ini untuk mengekspor komponent react
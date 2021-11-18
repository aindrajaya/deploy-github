export const Header1 = (props) => {
  return(
    <h1>{props.name}</h1>
  )
}

//function component props
export const Header4 = (props) => {
  const kelipatan2 = props.count*2
  return(
    <h4>{kelipatan2}</h4>
  )
}

//functional component/ Hooks
function komponent(){
  return(
    <div>Komponent satu</div>
  )
}

//class compnoent
class Komponent {
   render(){
    return(
      <div>Komponent satu</div>
    )
  }
}
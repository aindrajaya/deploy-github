import ButtonKlik from "./Button";


export function CounterPlace({color, count, increment, decrement}){ //alternative penulisan props
  // const {color, count, increment, decrement} = props //destructuring props property
//  console.log(props)
  return(
    <div style={{backgroundColor: color, margin:"20px", padding:"0px 40% 0px 40%"}}>
      {count}
      <ButtonKlik symbol="+" process={increment}/>
      <ButtonKlik symbol="-" process={decrement}/>
    </div>

  )
}

// export default CounterPlace
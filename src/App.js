import { Fragment } from "react"
import CekUser from "./components/CekUser"
import HideShow from "./components/HideShow"
import Simple from "./components/Simple"

function App(){
  return (
    <Fragment>
      <h1>Helloo</h1>
      <Simple />
      <HideShow/>
      <CekUser />
    </Fragment>
  )
}

export default App
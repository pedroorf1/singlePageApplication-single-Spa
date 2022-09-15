import * as React from 'react'

import { useStore } from "@platos/store";
import Styles from "@platos/styles"
const { Button, InputText } = Styles

export default function Root(props) {

  console.log(">>>>>>>>>>>>>>>>>>>:", Button)

  const [isHover, setIsHover] = React.useState(false);
  //estado do component
  const handleMouseEnter = (e) => {
    setIsHover(true)
  }
  const handleMouseLeave = (e) => {
    setIsHover(false)
  }

  const styleButton = {
    backgroundColor: isHover ? "#339999" : "#449966",
    padding: "10px",
    cursor: "pointer",
    borderColor: "transparent",
    borderRadius: "5px",
    color: "#FFF",
    transition: "0.5s"
  }

  const styleContent = {
    width: "100%",
    padding: "2em",
    minHeight: "50vh",
    backgroundColor: "#DDD",
    margin: 0,
  }

  //store
  const state = useStore();
  return (<>
    <div class="main-content" style={styleContent}>
      <p>{props.name}</p>
      <Button
        onClick={() => state.toggle()}
        style={styleButton}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>Mudar estado</Button>

      <section>
        {state.loading ? <div>Carregado</div> : <div>Livre</div>}
      </section>

    </div>

  </>)
}
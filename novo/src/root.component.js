import * as React from 'react'

import { useStore } from "@platos/store";
import Styles from "@platos/styles"
const { Button, InputText, Container } = Styles

export default function Root(props) {

  const [isHover, setIsHover] = React.useState(false);
  //estado do component
  const handleMouseEnter = (e) => {
    setIsHover(true)
  }
  const handleMouseLeave = (e) => {
    setIsHover(false)
  }
  //store
  const state = useStore();
  return (<>
    <Container class="main-content" >
      <p>{props.name}
        <Button
          onClick={() => state.toggle()}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>Mudar estado</Button>
      </p>
      <p>
        <InputText />
      </p>

      <section>
        {state.loading ? <div>Carregado</div> : <div>Livre</div>}
      </section>

    </Container>

  </>)
}
import * as React from 'react'

import ParcelComponent from 'single-spa-react/parcel';
import { mountRootParcel } from 'single-spa';

import { useStore } from "@platos/store";
import Styles from "@platos/styles"
const { Button, Container, MainContainer } = Styles

export default function Root(props) {

  const remoteImport = async url => await System.import(url)

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

  const data = [
    { url: "https://cdn.pixabay.com/photo/2012/04/13/20/37/car-33556_960_720.png", name: "PixaBay" },
    { url: "https://cdn.pixabay.com/photo/2016/05/06/16/32/car-1376190_960_720.jpg", name: "PixaBay" },
    { url: "https://st.depositphotos.com/2346379/2568/i/450/depositphotos_25684951-stock-photo-headlight.jpg", name: "PixaBay" },
    { url: "https://static8.depositphotos.com/1006839/950/i/450/depositphotos_9504662-stock-photo-black-back-car.jpg", name: "PixaBay" },
    { url: "https://st.depositphotos.com/1005171/2032/i/450/depositphotos_20329319-stock-photo-black-sports-car-road-star.jpg", name: "PixaBay" },
    { url: "https://st2.depositphotos.com/4556043/9542/i/450/depositphotos_95427908-stock-photo-3d-cg-rendering-of-a.jpg", name: "PixaBay" },
    { url: "https://st3.depositphotos.com/13052220/19388/i/450/depositphotos_193881588-stock-photo-new-car-in-showroom.jpg", name: "PixaBay" }
  ]


  return (<>
    <MainContainer>
      <Container class="main-content" >
        <p>{props.name}
          <Button
            onClick={() => state.toggle()}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Mudar estado</Button>
        </p>
        <section>
          {state.loading ?
            <div>
              <img style={
                {
                  width: "100%",
                  padding: "1em"
                }} src="https://logodownload.org/wp-content/uploads/2020/07/cogna-logo.png" />
            </div> :
            <div>
              <img style={
                {
                  width: "100%",
                  padding: "1em"
                }} src="https://s3.sa-east-1.amazonaws.com/remotar-assets-prod/company-profile-covers/cl6v4d2ks00c404ytc3sa23xk.jpg" />
            </div>}
        </section>

      </Container>
      {

        <ParcelComponent
          config={remoteImport('@platos/card')}
          mountParcel={mountRootParcel}
          data={data}
        />

      }
    </MainContainer>

  </>)
}
import styled from "styled-components"

const CCard = styled.div`
  width:300px !important;
  height: 400px !important;
  border: 2px solid #DDD;
  border-radius: 10px;
  background-color: #FFF;
  padding: 1rem;
  margin: 2rem;
  overflow: hidden;
  white-space: nowrap;
  img{
    /* max-width: 100%; */
    max-height: 100%;
    border-radius: 10px;
    margin-left: -30%;
  }
`

const Container = styled.p`
  display: flex;
  flex-wrap: wrap;
  width:80% !important;
  margin-left: 8% !important;
  border-color:#991111;
  background-color: #FFF;
  padding: 1rem;
  margin: 2rem;
  overflow: hidden;

`

export default { CCard, Container }
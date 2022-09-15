import styled from "styled-components"
let isHover = false

const Button = styled.input`
font-size:1rem ;
color: tomato;
background-color: #449966;
padding: 10px;
cursor: pointer;
border-color: transparent;
border-radius: 5px;
color: #FFF;
transition: 0.5s;
margin:1rem ;
&:hover {
     background-color: #339999;
  }
`
export default Button
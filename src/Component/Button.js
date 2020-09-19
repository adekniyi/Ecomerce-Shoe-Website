import styled from 'styled-components'


const ButtonComponent = styled.button`
text-transform:capitalize;
font-size:1rem;
background:transparent;
padding: 0.2rem 0.5rem 0.2rem 0.5rem;
border-radius:0.2rem;
border: 0.05rem solid black;
transition: all 0.5s ease-in-out;
&:hover{
  background:blue;
  colour: white;
  border: 0.05rem solid blue;
}
&:focus:none;
`

export default ButtonComponent;
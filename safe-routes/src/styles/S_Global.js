import styled from 'styled-components'

export const color_pallete = {
  primary: '#6b8a8f',
  secondary: '#c3b690',
  accent_1: '#fccb8d',
  accent_2: '#fec872',
  accent_3: '#e9993d',
}

export const Container = styled.div `
  height: 100vh;
  font-size: 1.5rem;
`
export const Form = styled.form `
  background: ${props => props.background};
  color: ${props => props.color};
  height: ${props => props.height};
  width: ${props => props.width};
  margin: 0 auto;
  padding: 10px;
`
export const FormInput = styled.input `

`
export const FormBtn = styled.button `

`

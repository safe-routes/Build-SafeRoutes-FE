import styled from 'styled-components';

export const color_pallete = {
  primary: '#6b8a8f',
  secondary: '#c3b690',
  accent_1: '#fccb8d',
  accent_2: '#fec872',
  accent_3: '#e9993d'
};

export const Container = styled.div`
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .login-container {
    width: 100%;
  }

  .login-form-container {
    @media (min-height: );
  }
`;

export const Form = styled.form`
  background: ${props => props.background};
  color: white;
  height: ${props => props.height};
  width: ${props => props.width};
  margin: auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 7px;
  font-size: 1rem;

  @media (max-width: 700px) {
    width: 95%;
    height: 90%;
  }

  h1 {
    margin-bottom: 10px;
    color: white;
    font-weight: 500;
  }

  a {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`;
export const FormInput = styled.input`
  border: none;
  border-bottom: 1.5px solid ${color_pallete.accent_3};
  margin: 5px;
  height: 25px;
  width: ${props => (props.width ? props.width : '50%')};
  height: ${props => (props.height ? props.height : '30px')}

  background: none;
  text-align: center;
  ::placeholder {
    color: white;
  }
`;
export const FormBtn = styled.button`
  width: ${props => (props.width ? props.width : '50%')};
  height: ${props => props.height};
  background: ${color_pallete.accent_3};
  border: none;
  border-radius: 5px;
  color: white;
  margin: 10px;
  cursor: pointer;
`;

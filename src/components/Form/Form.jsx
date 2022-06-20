import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Input from '../Input/Input'
import Button from '../Button/Button'
import * as S from './Form.styles'

function Form() {
  const [formValues, setFormValues] = useState();

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(formValues);
  } 
  return (
    <S.Form onSubmit={handleSubmit}>
      <S.H2>Login</S.H2>
      <Input 
        type="email"
        label="Email"
        placeholder='info@example.com'
        handleChange={(emailValue) => 
          setFormValues({...formValues, email: emailValue})
        }
      />
      <Input 
        type="password"
        label="Password"
        placeholder='password'
        handleChange={(paswodValue) => 
          setFormValues({...formValues, password: paswodValue})
        }
      />
      <Button type="submit">Submit</Button>
      <S.P>Dont have an account yet?</S.P>
      <S.A href="#">Register</S.A>
    </S.Form>
  )
}

Form.propTypes = {}

export default Form

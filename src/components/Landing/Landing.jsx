import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Landing.styles';
import Form from '../Form/Form';
import Container from '../Container/Container';

function Landing({ children }) {

  return (
    <S.Background>
      <Container>
        <S.Flex>
          <Form />
        </S.Flex>
      </Container>
    </S.Background>
  )
}

Landing.propTypes = {
  children: PropTypes.node,
}

export default Landing

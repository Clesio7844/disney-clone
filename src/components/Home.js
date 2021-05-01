import React from 'react';
import styled from 'styled-components';
import ImgSlider from './ImgSlider';

const Home = () => {
  return (
    <Container className='container'>
      <ImgSlider />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;

  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background-image: url('/images/home-background.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    content: '';
    position: absolute;
    inset: 0px;
    z-index: -1;
    opacity: 1;
  }
`;

import styled from 'styled-components';

export default styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(https://source.unsplash.com/random);
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 15;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    opacity: 0.3;
    z-index: -1;
  }
`;

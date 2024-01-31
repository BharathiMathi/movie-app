import styled from 'styled-components';

export default function LoadingSpinner() {
  return (
    <OverlayContainer>
      <Container>
        <Loader />
      </Container>
    </OverlayContainer>
  );
}

const OverlayContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: #1b94ff #1480df #1b94ff #1b94ff;
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: '';
    border-radius: 50%;
    background: #1b94ff;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

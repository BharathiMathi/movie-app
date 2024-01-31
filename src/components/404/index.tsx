import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import { GUITexts } from 'config';

const { ErrorCode, NotFound: NotFoundText, NotFoundMsg } = GUITexts;

const PageNotFound = () => {
  return (
    <Container>
      <Grid>
        <Column>
          <InfoText>
            <Icon>
              <FaExclamationTriangle />
            </Icon>
            {ErrorCode}
          </InfoText>
          <InfoText>{NotFoundText}</InfoText>
          <Message>
            <strong>{NotFoundMsg}</strong>
          </Message>
        </Column>
      </Grid>
    </Container>
  );
};

export default PageNotFound;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 168px);
`;

const Grid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.h2`
  color: #0eefef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.i`
  margin-right: 0.5em;
`;

const Message = styled.div`
  color: #fff;
  margin-top: 1em;
`;

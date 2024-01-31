import styled from 'styled-components';
import { GUITexts } from 'config';

const { Opps, SomethingWentWrong } = GUITexts;

type ErrorPageProps = {
  message?: string;
};

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <ErrorPageWrapper>
      <OopsText>{Opps}</OopsText>
      <MessageText>{SomethingWentWrong}</MessageText>
      <ErrorDetails>{message}</ErrorDetails>
    </ErrorPageWrapper>
  );
};

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 150px);
`;

const OopsText = styled.div`
  font-size: 3em;
  font-weight: bold;
  color: #dc3545;
`;

const MessageText = styled.div`
  margin-top: 1em;
  font-size: 1.5em;
  color: #fff;
`;

const ErrorDetails = styled.div`
  font-size: 1em;
  color: #fff;
  margin-top: 1em;
  text-align: center;
`;

export default ErrorPage;

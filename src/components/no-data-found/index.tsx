import styled from 'styled-components';

type NoDataFoundProps = {
  infoText: string;
  icon: React.ReactNode;
};

const NoDataFound: React.FC<NoDataFoundProps> = ({ infoText, icon }) => (
  <MessageContainer>
    <Wrapper>
      {icon} {infoText}
    </Wrapper>
  </MessageContainer>
);

export default NoDataFound;

const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

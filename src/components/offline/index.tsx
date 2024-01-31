import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaWifi } from 'react-icons/fa';
import { GUITexts } from 'config';

const { AppNeedsInternet, YouAreOffline } = GUITexts;

const Offline = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const setOnline = () => setIsOnline(true);
  const setOffline = () => setIsOnline(false);

  useEffect(() => {
    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };
  }, []);

  return isOnline ? null : (
    <Container>
      <StyledAlert>
        <strong>
          <FaWifi /> {YouAreOffline}
        </strong>
        <p style={{ margin: '0.5em 0' }}>{AppNeedsInternet}</p>
      </StyledAlert>
    </Container>
  );
};

export default Offline;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  margin: 10px 0;
  font-weight: 700;
`;

const StyledAlert = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 15px;
  color: #4576a1;
  background-color: #dedede;
  border-color: #f5c6cb;
  border-radius: 4px;
  width: 80%;
  flex-direction: column;
`;

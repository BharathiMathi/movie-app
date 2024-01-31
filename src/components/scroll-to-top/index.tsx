import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(() => window.scrollY > 400);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      const shouldShow = window.scrollY > 400;
      if (isVisible !== shouldShow) {
        setIsVisible(shouldShow);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [isVisible]);

  return isVisible ? (
    <ScrollButton onClick={scrollTop}>
      <FaArrowCircleUp />
    </ScrollButton>
  ) : null;
};

export default ScrollToTop;

const ScrollButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #fff;
  color: #000;
  padding: 10px;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  @media (max-width: 640px) {
    bottom: 70px;
  }
`;

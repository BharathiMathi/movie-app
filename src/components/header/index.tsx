import styled from 'styled-components';
import { FaHome, FaHeart } from 'react-icons/fa';
import { Routes, GUITexts } from 'config';
import NavLink from './nav-link';
import { useNavigate } from 'react-router-dom';

const { Labels, Paths } = Routes;

const links = [
  { to: Paths.Home, label: Labels.Home, icon: <FaHome /> },
  { to: Paths.Favourites, label: Labels.Favourites, icon: <FaHeart /> },
];

const Header = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <HeaderBar>
        <Logo onClick={() => navigate(Paths.Home)}>
          <h1>{GUITexts.AppTitle}</h1>
        </Logo>
        <DesktopNavBar>
          <NavLink links={links} />
        </DesktopNavBar>
      </HeaderBar>
      <MobileNavBar>
        <NavLink links={links} />
      </MobileNavBar>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background: var(--lighter);
  @media (max-width: 640px) {
    height: 100%;
  }
  position: sticky;
  top: -1px;
  z-index: 1000;
`;
const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  position: relative;

  @media (max-width: 640px) {
    padding: 1rem 0;
    justify-content: center;
  }
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  a {
    font-size: 1.8rem;
  }

  h1 {
    font-weight: 600;
    font-size: 1.8rem;
  }

  cursor: pointer;

  @media (max-width: 640px) {
    pointer-events: none;
  }
`;

const DesktopNavBar = styled.div`
  @media (max-width: 640px) {
    display: none;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    padding: 10px 15px;
    display: inline-flex;
    gap: 4px;
  }
  a:hover {
    background: rgb(88 88 99);
    border-radius: 4px;
  }
`;

const MobileNavBar = styled.nav`
  display: none;
  position: fixed;
  bottom: -1px;
  width: 100%;
  background: var(--lighter);
  padding: 10px 0;
  z-index: 1000;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }

  a.active {
    color: #007bff;
    outline: none;
    box-shadow: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;

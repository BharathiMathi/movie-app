import { NavLink } from 'react-router-dom';
import { ReactNode } from 'react';

type CustomNavLinkProps = {
  links: { to: string; label: string; icon: ReactNode }[];
};

const CustomNavLink: React.FC<CustomNavLinkProps> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <NavLink key={link.to} to={link.to}>
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </>
  );
};

export default CustomNavLink;

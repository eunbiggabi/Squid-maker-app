import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: #263343;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  color: #eeee;
  border-bottom: 2px solid #d49466;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px 24px;
    align-items: flex-start;
  }
`;

export const NavbarLogoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 38px;
  border-radius: 50%;
`;

export const LogoName = styled.a`
  text-decoration: none;
  margin-left: 0.8rem;
  color: #eeee;
`;

export const Hamburger = styled.div`
  display: none;
  position: absolute;
  right: 22px;
  top: 28px;
  font-size: 1.6rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  @media (max-width: 768px) {
    text-alingn: center;
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const MenuLink = styled.a`
  padding: 8px 12px;
  color: #eeee;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #eeee;
  font-size: 0.9rem;

  &:hover {
    background-color: #d49466;
    border-radius: 4px;
  }
`;

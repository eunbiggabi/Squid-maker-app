import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Nav,
  Logo,
  Hamburger,
  Menu,
  MenuLink,
  NavbarLogoContainer,
  LogoName,
} from "./navbar.styled";
import { useGlobalState } from "../../../utils/stateContext";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { store, userDispatch } = useGlobalState();
  const { loggedInUser } = store;
  const navigate = useNavigate();

  function logout(e) {
    e.preventDefault();
    console.log("log out");
    sessionStorage.clear();
    // activateUser("");
    userDispatch({
      type: "setLoggedInUser",
      data: "",
    });
    userDispatch({
      type: "setToken",
      data: "",
    });
    navigate("/home");
  }

  return (
    <Nav>
      <NavbarLogoContainer>
        <Logo src="images/squid.png" alt="logo" />
        <LogoName href="/home">Squid Maker</LogoName>
      </NavbarLogoContainer>

      <Menu isOpen={isOpen}>
        <MenuLink href="/home">Home</MenuLink>
        <MenuLink href="/maker">Maker</MenuLink>
        <MenuLink href="/search">Search</MenuLink>
        {loggedInUser ? (
          <>
            <MenuLink href="/home" onClick={logout}>
              LogOut
            </MenuLink>
          </>
        ) : (
          <>
            <MenuLink href="/log_in">LogIn</MenuLink>
            <MenuLink href="/sign_up">SignUp</MenuLink>
          </>
        )}
      </Menu>

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Hamburger>
    </Nav>
  );
}

// import styles from "./navbar.module.css";
// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { menuItems } from "./menu_items/menu_items";
// import Button from "../../button/button";

// export default function Navber() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <header className={styles.header}>
//       <div className={styles.navbar_logo_container}>
//         <img className={styles.logo} src="/images/squid.png" alt="logo" />
//         <a href="/home">Squid Maker</a>
//       </div>

//       <a href="#" class="navbar__toggleBtn" onClick={() => setIsOpen(!isOpen)}>
//         <GiHamburgerMenu />
//       </a>

//       <ul className={styles.navbar_menu} isOpen={isOpen}>
//         <li className={styles.menu}>
//           <a href="/home">Home</a>
//         </li>
//         <li className={styles.menu}>
//           <a href="/maker">Maker</a>
//         </li>
//         <li className={styles.menu}>
//           <a href="/search">Search</a>
//         </li>
//         <li className={styles.menu}>
//           <a href="/log_in">LogIn</a>
//         </li>
//         <li className={styles.menu}>
//           <a href="/sign_up">SignUp</a>
//         </li>
//       </ul>
//     </header>
//   );
// }

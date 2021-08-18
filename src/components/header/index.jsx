import { HeaderContainer, Dropdown, DropdownContent, ContainerNone } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

import { useContext } from "react";

import { AuthTokenContext } from "../../providers/Auth";

const Header = () => {

  const { setAuthN } = useContext(AuthTokenContext);

  const history = useHistory();

  const handleLogout = () => {
    //descobrir um jeito de alterar o state AuthN (esta no criado no routes) para false
    localStorage.clear();
    history.push('/');
    setAuthN(false);
  }

  return (
    <HeaderContainer>
      <nav>
        <Link to='/'><img src={ Logo } alt="logo"></img></Link>
        <Dropdown>
          <ContainerNone>
            <GiHamburgerMenu />
          </ContainerNone>
            <DropdownContent>
              <ul>
                <Link to='/dashboard'><li>Dashboard</li></Link>
                <Link to='/groups'><li>Group</li></Link>
                <Link to='/perfil'><li>Perfil</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </DropdownContent>
        </Dropdown>
      </nav>
    </HeaderContainer>
  );
};
export default Header;

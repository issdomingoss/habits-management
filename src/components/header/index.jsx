import { HeaderContainer, Dropdown, DropdownContent, ContainerNone } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <HeaderContainer>
      <nav>
        <Link to='/dashboard'><img src={ Logo } alt="logo"></img></Link>
        <Dropdown>
          <ContainerNone>
            <GiHamburgerMenu />
          </ContainerNone>
            <DropdownContent>
              <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/groups'><li>Group</li></Link>
                <Link to='/perfil'><li>Perfil</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
              </ul>
            </DropdownContent>
        </Dropdown>
      </nav>
    </HeaderContainer>
  );
};
export default Header;

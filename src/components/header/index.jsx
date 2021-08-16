import { HeaderContainer, Image } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory, Link } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <nav>
        <Image onClick={ handleLogoClick }>
          <img src={ Logo } alt="logo"></img>
        </Image>
        <div>
          <GiHamburgerMenu />
            {/* <div>
              <ul>
                <li>Home</li>
                <li>Group</li>
                <li>Perfil</li>
                <li>Contact Us</li>
              </ul>
            </div> */}
        </div>
      </nav>
    </HeaderContainer>
  );
};
export default Header;

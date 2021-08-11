import { HeaderContainer, Image } from "./styles";
import Logo from "../../assets/logo_Speak_Tracks.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/");
  };

  return (
    <HeaderContainer>
      <nav>
        <Image onClick={handleLogoClick}>
          <img src={Logo} alt="logo"></img>
        </Image>
        <div>
          <GiHamburgerMenu />
        </div>
      </nav>
    </HeaderContainer>
  );
};
export default Header;

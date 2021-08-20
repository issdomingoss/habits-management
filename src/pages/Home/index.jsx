import {
  NavHome,
  ContainerHome,
  ContainerTitle,
  ContainerSubTitle,
  ContainerButtonGetStarted,
  ContainerLogo,
  ImgLogo,
  ContainerImgHome,
  ButtonSignIn,
  ButtonSignUp,
  ContainerMainFlex,
  Footer,
} from "./style";

import img_Home from "../../assets/image 1.png";
import logo from "../../assets/logo_Speak_Tracks_branco.PNG";

import { Link, useHistory } from "react-router-dom";

const PageHome = ({ AuthN }) => {
  const history = useHistory();

  const sendToPageLogin = () => {
    history.push("/login");
  };

  const sendToPageRegister = () => {
    history.push("/register");
  };

  return (
    <ContainerHome>
      <NavHome>
        <ContainerLogo>
          <Link to="/">
            <ImgLogo alt="img-logo" src={logo} />
          </Link>
        </ContainerLogo>

        <div>
          <ButtonSignIn onClick={sendToPageLogin}>Sign In</ButtonSignIn>
          <ButtonSignUp onClick={sendToPageRegister}>Sign Up</ButtonSignUp>
        </div>
      </NavHome>

      <ContainerMainFlex>
        <div>
          <ContainerImgHome>
            <img alt="img_home" src={img_Home} />
          </ContainerImgHome>
        </div>

        <div>
          <ContainerTitle>
            <h2>Evolve constatly and meet people!</h2>
          </ContainerTitle>

          <ContainerSubTitle>
            <p>
              Study habits management platform for people who want to explore
              the world.
            </p>
          </ContainerSubTitle>

          <ContainerButtonGetStarted>
            <button onClick={sendToPageRegister}>get started!</button>
          </ContainerButtonGetStarted>
        </div>
      </ContainerMainFlex>

      <Footer>
        <footer>
          <p>
            All rights reserved for the creators of this page are here:{" "}
            <Link to="/contact">Contact Us</Link>
          </p>
        </footer>
      </Footer>
    </ContainerHome>
  );
};

export default PageHome;

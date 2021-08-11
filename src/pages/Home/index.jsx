import { NavHome, ContainerHome, ContainerTitle, 
        ContainerSubTitle, ContainerButtonGetStarted,
        ContainerLogo, ImgLogo, ContainerImgHome, 
        ButtonSignIn, ButtonSignUp, ContainerMainFlex } from './style';

import img_Home from '../../assets/image 1.png';
import logo from '../../assets/logo_Speak_Tracks_branco.PNG'

const PageHome = () => {
    return(
        <ContainerHome>
            <NavHome>
                <ContainerLogo>
                    <ImgLogo alt='img-logo' src={logo}/>
                </ContainerLogo>

                <div>
                    <ButtonSignIn>Sign In</ButtonSignIn>
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                </div>

            </NavHome>

            <ContainerMainFlex>
                <div>
                    <ContainerImgHome>
                        <img alt='img_home' src={ img_Home } />
                    </ContainerImgHome>
                </div>
                
                <div>
                    <ContainerTitle>
                        <h2>Evolve constatly and meet people!</h2>
                    </ContainerTitle>

                    <ContainerSubTitle>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur excepturi illo at quia dignissimos.</p>
                    </ContainerSubTitle>
                    
                    <ContainerButtonGetStarted>
                        <button>get started!</button>
                    </ContainerButtonGetStarted>
                </div>
            </ContainerMainFlex>
        </ContainerHome>
    )
}

export default PageHome;
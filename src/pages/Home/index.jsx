import { NavHome } from './style';

const PageHome = () => {
    return(
        <div>
            <NavHome>
                <div>
                    <h1>LOGO</h1>
                </div>
                
                <div>
                    <button>Sign In</button>
                    <button>Sign Up</button>
                </div>
            </NavHome>

            <div>
                <img alt='img_home' src='' />
            </div>

            <div>
                <h2>Evolve constatly and meet people!</h2>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam voluptatum  excepturi illo at quia dignissimos.</p>
            </div>
            <div>
                <button>GET STARTED</button>
            </div>
        </div>
    )
}

export default PageHome;
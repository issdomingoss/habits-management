import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

import logo from '../../assets/logo_Speak_Tracks.PNG';
import img_login from '../../assets/image 4.png';

import api from '../../services/api';

import { ContainerBackGround, Form, ContainerInputLogin, Img, ButtonLogin } from './style';

const PageLogin = () => {

    const schema = yup.object().shape({
        username: yup
            .string()
            .min(3, 'Minimum 3 characters!')
            .matches(/^[a-zA-Z]+$/, 'It must only contain letters!')
            .required('Required field!'),
        password: yup
            .string()
            .min(8, 'Minimum 8 characteres!')
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
                'Password must contain at least one capital letter, one number and one special character!')
            .required('Required field!')
    });

    //faz a conexão do meu formulário com meu schema
    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(schema)});
    const history = useHistory();
        
    const handleMyForm = (data) => {
        //data é um objeto onde podemos enviar para API usando um get para criar um usuário
        const { username, password } = data;
        const sendToAPI = { username, password };
        
        //AXIOS AQUI
        api.post('/sessions/', sendToAPI)
        .then(response => {
            reset();
            console.log(response);
            localStorage.setItem('token', JSON.stringify(response.data.access));
            history.push('/dashboard');

        }).catch(e => console.log(e));
    }

    return(

        <ContainerBackGround>

            <Img alt='img_logo' src={ logo } />

            <Form onSubmit={ handleSubmit(handleMyForm) }>

                <h2>Sign In</h2>

                <img alt='img_logo' src={ img_login }/>

                <ContainerInputLogin>
                    <label>Username:</label>
                    <input type='text'{...register('username')}/>
                    <span style={{color: 'red'}}>{ errors.username?.message }</span>
                </ContainerInputLogin>
                
                <ContainerInputLogin>
                    <label>Password:</label>
                    <input type='password' {...register('password')}/>
                    <span style={{ color: 'red' }}> {errors.password?.message }</span>
                </ContainerInputLogin>
                
                <div>
                    <p>Don't have an account? <Link to='/register'>Register</Link></p>
                </div>

                <div>
                    <ButtonLogin type='submit'>Login</ButtonLogin>
                </div>
            </Form>

        </ContainerBackGround>
       
    )
}

export default PageLogin;
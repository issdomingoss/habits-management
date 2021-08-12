import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { ContainerBackGround, Form, Img, ContainerInputs, Title, 
        ButtonCreateAccount } from './style';

import logo from '../../assets/logo_Speak_Tracks.PNG';



const PageLogin = () => {

    const schema = yup.object().shape({

        username: yup
            .string()
            .min(3, 'Mínimo de 3 caracteres')
            .matches(/^[a-zA-Z]+$/, 'Deve conter somente letras')
            .required('Campo obrigatório'),
        email: yup
            .string().email('Email Inválido')
            .required('Campo Obrigatório!'),
        password: yup
            .string()
            .min(8, 'Mínimo 8 dígitos')
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 
                'Senha deve conter ao menos uma letra maiúscula, um número e um caractere especial')
            .required('Campo obrigatório'),
        confirmPassword: yup
    });

    //faz a conexão do meu formulário com meu schema
    const { register, handleSubmit } = useForm({resolver: yupResolver(schema)});
        
    const handleMyForm = (data) => {
        //data é um objeto onde podemos enviar para API usando um get para criar um usuário
        //AXIOS AQUI
        console.log(data);
    }

    return(

        <ContainerBackGround>

            <Img alt='img_logo' src={ logo } />

        <Form onSubmit={ handleSubmit(handleMyForm) }>

            <Title>Sign Up</Title>

            <ContainerInputs>
                <span>Username:</span>
                    <input {...register('username')}/>
            </ContainerInputs>
            <ContainerInputs>
                <span>Email:</span>
                <input {...register('email')}/>
            </ContainerInputs>
            <ContainerInputs>
                <span>Password:</span>
                <input {...register('password')}/>
            </ContainerInputs>
            <ContainerInputs>
                <span>Confirm Password:</span>
                <input {...register('confirmPassword')}/>
            </ContainerInputs>

            <div>
                <p>Already have an account? <a>Login</a></p>
            </div>

            <div>
                <ButtonCreateAccount type='submit'>Create an Account</ButtonCreateAccount>
            </div>
        </Form>

        </ContainerBackGround>
       
    )
}

export default PageLogin;
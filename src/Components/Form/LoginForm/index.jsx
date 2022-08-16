import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';

import { DivContainer, FormLogin, DivTitle, InputLogin, ButtonLogin, ButtonRegister, Error } from './styles';

const LoginForm = () =>{

    const navigate = useNavigate()
    const {signIn} = useContext(AuthContext)

    function goRegister (){
        navigate('/Register', {replace: true})
    }

    const formSchema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().required('Senha obrigatória'),
    })

    const {register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <DivContainer>
            <FormLogin onSubmit={handleSubmit(signIn)}>

                <DivTitle>
                    <h1>Login</h1>
                </DivTitle>

                <label>E-mail</label>
                <InputLogin
                type="text"
                placeholder='Nome'
                {...register('email')} />
                <Error>{errors.email?.message}</Error>

                <label>Senha</label>
                <InputLogin
                type="password"
                placeholder='Senha'
                {...register('password')} />
                <Error>{errors.password?.message}</Error>

                <ButtonLogin type='submit'>Entrar</ButtonLogin>
            </FormLogin>
            <h3>Ainda não possui uma conta?</h3>
            <ButtonRegister onClick={goRegister}>Cadastre-se</ButtonRegister>
        </DivContainer>
    )
}

export default LoginForm
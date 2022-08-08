import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { kenzieHubApi } from '../../../Services/kenzieHubApi';

import { toast } from 'react-toastify';
import { DivContainer, FormLogin, DivTitle, InputLogin, ButtonLogin, ButtonRegister, Error } from './styles';

const LoginForm = () =>{

    const navigate = useNavigate()

    function goRegister (){
        navigate('/Register')
    }

    const formSchema = yup.object().shape({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().required('Senha obrigatória'),
    })

    const {register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFn = (data) =>{
        kenzieHubApi.post('/sessions', data)
        .then((res)=>{
            console.log(res)

            localStorage.setItem('KenzieHub:userId', res.data.user.id)
            localStorage.setItem('KenzieHub:token', res.data.token)
            toast.success('Login feito com sucesso!', {autoClose: 2000})
            setTimeout(()=>{
                navigate('/Dashboard')
            }, 1000)
        })
        .catch((err)=> toast.error('Login e/ou senha inválidos'))
    }

    return (
        <DivContainer>
            <FormLogin onSubmit={handleSubmit(onSubmitFn)}>

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
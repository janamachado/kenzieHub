import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { DivContainer, StyledForm, InputText, ButtonRegister, Error } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';

const RegisterForm = () =>{

    const {registerUser} = useContext(AuthContext)

    const formSchema = yup.object().shape({

        name: yup.string()
        .required('Campo obrigatório'),

        email: yup
        .string()
        .email('E-mail inválido')
        .required('Campo obrigatório'),

        password: yup
        .string()
        .required('Campo obrigatório')
        .matches(/[A-Z]/, "Deve conter ao menos 1 letra maiúscula")
        .matches(/([a-z])/, "Deve conter ao menos 1 letra minúscula")
        .matches(/(\d)/, "Deve conter ao menos 1 número")
        .matches(/(\W)|_/, "Deve conter ao menos 1 caracter especial")
        .matches(/.{8,}/, "Deve conter ao menos 8 dígitos"),
        

        confirmPassword: yup
        .string()
        .required('Campo obrigatório')
        .oneOf([yup.ref('password')], 'A senha deve ser a mesma'),

        bio: yup.string(),
        contact: yup
        .string()
        .required('Campo obrigatório')
    })

    const {register, handleSubmit, formState: {errors}
    } = useForm({
        resolver: yupResolver(formSchema)
        })

    return (
        <DivContainer>
            <StyledForm onSubmit={handleSubmit(registerUser)}>
                <div>
                    <h1>Crie sua conta</h1>
                    <p>Rápido e grátis, vamos nessa!</p>

                </div>
                <label>Nome</label>
                <InputText
                type='text'
                placeholder="Nome"
                {...register('name')} />
                <Error>{errors.name?.message}</Error>

                <label>E-mail</label>
                <InputText
                type='text'
                placeholder="E-mail"
                {...register('email')}/>
                <Error>{errors.email?.message}</Error>

                <label>Senha</label>
                <InputText
                type='password'
                placeholder="Digite sua senha"
                {...register('password')}/>
                <Error>{errors.password?.message}</Error>

                <label>Confirmar senha</label>
                <InputText
                type='password'
                placeholder="Digite novamente sua senha"
                {...register('confirmPassword')}/>
                <Error>{errors.confirmPassword?.message}</Error>

                <label>Bio</label>
                <InputText
                type='text'
                placeholder="Fale sobre você"
                {...register('bio')}/>
                <Error>{errors.bio?.message}</Error>

                <label>Contato</label>
                <InputText
                type='text'
                placeholder="Opções de contato"
                {...register('contact')}/>
                <Error>{errors.contact?.message}</Error>

                <label>Selecionar módulo</label>
                <select
                name="course_module"
                placeholder="Fale sobre você"
                {...register('course_module')}>
                    <option value="m1">M1</option>
                    <option value="m2">M2</option>
                    <option value="m3">M3</option>
                    <option value="m4">M4</option>
                    <option value="m5">M5</option>
                </select>
                <ButtonRegister type='submit'>Cadastrar</ButtonRegister>
            </StyledForm>
        </DivContainer>
    )
}

export default RegisterForm
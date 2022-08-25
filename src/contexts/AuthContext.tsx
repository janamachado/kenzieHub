import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { kenzieHubApi } from '../Services/kenzieHubApi'


export interface IUserProviderProps {
    children: ReactNode
}

export interface IContext {
    user: IUser
    signIn: (props: ISignInProps)=> void
    registerUser: (props: IRegisterProps)=> void
    getInfoUser: ()=> void
    loading: boolean
}

export interface IUser {
    avatar_url: string
    bio: string
    contact: string
    course_module: string
    created_at: string
    email: string
    id: string
    name: string
    techs: string[]
    updated_at: string
    works: string[]
}

export interface ISignInProps {
    email: string
    password: string
}

export interface IRegisterProps {
    bio: string
    contact: string
    course_module: string
    email: string
    name: string
    password: string
    confirmPassword: string
}

export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider = ({children}: IUserProviderProps) =>{

    const [user, setUser] = useState<IUser>({} as IUser)
    const [loading, setLoading] = useState<boolean>(true)
    const navigate = useNavigate()

    useEffect(()=>{
        async function loadUser (){
            const token = localStorage.getItem('KenzieHub:token')

            if(token){
                try {
                    kenzieHubApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
                    const {data} = await kenzieHubApi.get('/profile')
                    setUser(data)
                } catch (error) {
                    console.log(error)
                }
            }
            setLoading(false)
        }
        loadUser()
    }, [])

    const signIn = async (data: ISignInProps) =>{
        try {
            const response = await kenzieHubApi.post('/sessions', data)
            const {user: userResponse, token} = response.data
            kenzieHubApi.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setUser(userResponse)
            localStorage.setItem('KenzieHub:userId', response.data.user.id)
            localStorage.setItem('KenzieHub:token', token)
            toast.success('Login feito com sucesso!', { autoClose: 2000 })
            navigate('/Dashboard', {replace: true})
        } catch (error) {
            toast.error('Login e/ou senha inválidos')
        }
    }

    const registerUser = (data: IRegisterProps)=>{
        kenzieHubApi.post('/users', data)
        .then((res) => {
            toast.success('Cadastro feito com sucesso! Faça o login.', { autoClose: 2000 })
            setTimeout(()=>{
                navigate('/Login', {replace: true})
            }, 1000)
        })
        .catch((err)=> toast.error('Algo deu errado! Confira todos os campos preenchidos', { autoClose: 2000 }))      
    }

    const getInfoUser = () =>{
        const id = localStorage.getItem('KenzieHub:userId')
        kenzieHubApi.get(`/users/${id}`)
        .then((res)=> setUser(res.data))
        .catch((err)=>console.log(err))
    }

    return(
        <AuthContext.Provider value={{user, signIn, registerUser, getInfoUser, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UseUserContext = () => useContext(AuthContext)

export default AuthProvider
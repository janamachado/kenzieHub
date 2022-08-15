import {createContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { kenzieHubApi } from '../Services/kenzieHubApi'

export const AuthContext = createContext()

const AuthProvider = ({children}) =>{

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(()=>{
        async function loadUser (){
            const token = localStorage.getItem('KenzieHub:token')

            if(token){
                try {
                    kenzieHubApi.defaults.headers.authorization = `Bearer ${token}`
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

    const signIn = async (data) =>{
        try {
            const response = await kenzieHubApi.post('/sessions', data)
            const {user: userResponse, token} = response.data
            kenzieHubApi.defaults.headers.authorization = `Bearer ${token}`
            setUser(userResponse)
    
            localStorage.setItem('KenzieHub:userId', response.data.user.id)
            localStorage.setItem('KenzieHub:token', token)
            toast.success('Login feito com sucesso!', { autoClose: 2000 })
            navigate('/Dashboard', {replace: true})
        } catch (error) {
            toast.error('Login e/ou senha inválidos')
        }
    }

    const registerUser = (data)=>{
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

export default AuthProvider
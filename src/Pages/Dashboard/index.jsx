import { useNavigate } from "react-router-dom"
import logo from "../../img/Logo.png"
import Login from '../Login/index'
import { useEffect, useState } from "react";

import { toast } from 'react-toastify';
import { DivContainer, Header, Section, Main } from "./styles"
import { kenzieHubApi } from "../../Services/kenzieHubApi";


const Dashboard = () =>{

    const [user, setUser] = useState({})
    const navigate = useNavigate()

     function goBack (){

        localStorage.clear('KenzieHub:userId')
        localStorage.clear('KenzieHub:token')
        
        navigate('/Login')
     }

     function getInfoUser (){

        const id = localStorage.getItem('KenzieHub:userId')
        kenzieHubApi.get(`/users/${id}`)
        .then((res)=> setUser(res.data))
        .catch((err)=>console.log(err))

     }

     useEffect(()=>{
        getInfoUser()
     }, [])

    return (
        (localStorage.getItem('KenzieHub:token'))?
        <>
            <DivContainer>
                <Header>
                    <img src={logo} alt="Logo KenzieHub" />
                    <button onClick={goBack}>Sair</button>
                </Header>
            </DivContainer>

            <Section>
                <h2>Olá, {user?.name}</h2>
                <span>Módulo: {user?.course_module}</span>
            </Section>

            <Main>
                <h3>Que pena! Estamos em desenvolvimento :/ </h3>
                <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
            </Main>
        </>
        :
        <Login>
         {toast.error('Necessário fazer Login', {toastId: 'success1'}, {autoClose: 2000})}
        </Login>
        

    
    )
}

export default Dashboard
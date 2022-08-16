import { useNavigate } from "react-router-dom"
import logo from "../../img/Logo.png"
import Login from '../Login/index'
import { useContext, useEffect, useState} from "react";
import { AuthContext } from "../../contexts/AuthContext";
import AddTechs from "../../Components/AddTechs";
import RenderTechs from "../../Components/RenderTechs";

import { toast } from 'react-toastify';
import { DivHeader, Header, Section, Main, DivHeaderTechs, ButtonClose} from "./styles"
import './styled.css'

const Dashboard = () =>{
    const [addModal, setAddModal] = useState(false)
    const [allTechs, setAllTechs] = useState([])

    const {getInfoUser, user, loading} = useContext(AuthContext)
    const navigate = useNavigate()

    function goBack (){
        localStorage.clear('KenzieHub:userId')
        localStorage.clear('KenzieHub:token')
        navigate('/Login', {replace: true})
     }

    useEffect(()=>{
        getInfoUser()
    }, [])


    if(loading) return <div>Carregando...</div>
     
    return (
        <>
            {(user)?
            <>
                <header>
                    <DivHeader>
                        <Header>
                            <img src={logo} alt="Logo KenzieHub" />
                            <button onClick={goBack}>Sair</button>
                        </Header>
                    </DivHeader>

                    <Section>
                        <h2>Olá, {user?.name}</h2>
                        <span>Módulo: {user?.course_module}</span>
                    </Section>
                </header>

                <Main>
                    <DivHeaderTechs>
                        <h2>Tecnologias</h2>
                        <ButtonClose onClick={()=>setAddModal(true)}>+</ButtonClose>
                    </DivHeaderTechs>
                    <AddTechs
                    addModal={addModal}
                    setAddModal={setAddModal}
                    allTechs={allTechs}
                    setAllTechs={setAllTechs}
                    className={addModal? 'showModal': 'hiddenModal'}
                    >
                    </AddTechs>
                    
                    <RenderTechs
                    allTechs={allTechs}
                    setAllTechs={setAllTechs}
                    />                   
                </Main>
            </>
            :
            <Login>
            {toast.error('Necessário fazer Login', {toastId: 'success1'}, {autoClose: 2000})}
            </Login>
            }
        </>
    )
}

export default Dashboard
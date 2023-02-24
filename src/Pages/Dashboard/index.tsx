import { useNavigate } from "react-router-dom"
// import logo from "../../img/Logo.png"
import Login from '../Login/index'
import { useEffect, useState} from "react";
import { UseUserContext } from "../../contexts/AuthContext";
import AddTechs, { ITechs } from "../../Components/AddTechs";
import RenderTechs from "../../Components/RenderTechs";

import { DivHeader, Header, Section, Main, DivHeaderTechs, ButtonClose} from "./styles"
import './styled.css'


const Dashboard = () =>{
    const [addModal, setAddModal] = useState<boolean>(false)
    const [allTechs, setAllTechs] = useState<ITechs[]>([])

    const {getInfoUser, user, loading} = UseUserContext()
    const navigate = useNavigate()


    function goBack (){
        localStorage.clear()
        localStorage.clear()
        navigate('/Login', {replace: true})
     }

    useEffect(()=>{
        getInfoUser()
    }, [])

    if(loading) return <div>Carregando...</div>
     
    return (
        <>
            {user.name ?
            <>
                <header>
                    <DivHeader>
                        <Header>
                            {/* <img src={logo} alt="Logo KenzieHub" /> */}
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
                    />
                    
                    <RenderTechs
                    allTechs={allTechs}
                    setAllTechs={setAllTechs}
                    />                   
                </Main>
            </>
            :
            <Login />
            }
        </>
    )
}

export default Dashboard
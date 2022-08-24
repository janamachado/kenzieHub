
import {useEffect} from "react"
import { kenzieHubApi } from "../../Services/kenzieHubApi"
import {VscTrash} from 'react-icons/vsc'

import { toast } from 'react-toastify';
import {ListTechsDiv, LiTechs} from "./styles"
import { ITechs } from "../AddTechs";

export interface IRegisterProps{
    allTechs: ITechs[]
    setAllTechs: React.Dispatch<React.SetStateAction<ITechs[]>>
}

const RenderTechs = ({allTechs, setAllTechs}: IRegisterProps) =>{

    const userId = localStorage.getItem('KenzieHub:userId')

    const getAllTechs = () =>{
        kenzieHubApi.get(`/users/${userId}`)
        .then((res)=>{
            setAllTechs([...res.data.techs])
        })
        .catch((err)=>{
            toast.error('Ocorreu algum erro na visualização das sua tecnologias', {autoClose: 1000})
        })
    }

    useEffect(()=>{
        getAllTechs()
    }, [])

    const removeTech = (id: string) =>{
        kenzieHubApi.delete(`/users/techs/${id}`)
        .then(()=>{
            getAllTechs()
            toast.info('Tecnologia removida', {autoClose: 1000})
        })
        .catch(()=>{
            toast.error('Ocorreu algum erro ao remover sua tecnologia', {autoClose: 1000})
        })
    }

    return (
        <ListTechsDiv>
            {allTechs.length > 0 ? 
                <ul>
                    {allTechs?.map((item, index)=>(
                        <LiTechs key={index}>
                            <strong>{item?.title}</strong>
                            <div>
                                <p>{item?.status}</p>
                                <span>
                                    <VscTrash onClick={()=>removeTech(item.id)}>Remover</VscTrash>
                                </span>
                            </div>
                        </LiTechs>
                    ))}
                </ul>
            :
                <h2>Cadastre novas tecnologias</h2>
            }
        </ListTechsDiv>
    )
}

export default RenderTechs
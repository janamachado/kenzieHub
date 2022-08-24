
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { kenzieHubApi } from '../../Services/kenzieHubApi';

import { ModalAddTechs, DivHeaderAdd, DivForm, Form, Error } from "./styles"
import './styles.ts'

export interface ITechs {
    title: string
    status: string
    id: string
}

export interface IProps {
    addModal: boolean
    setAddModal: React.Dispatch<React.SetStateAction<boolean>>
    allTechs: ITechs[]
    setAllTechs: React.Dispatch<React.SetStateAction<ITechs[]>>
    className: string
}

const AddTechs = ({addModal, setAddModal, allTechs, setAllTechs}: IProps) =>{

    const schema = yup.object().shape({
        title: yup.string().max(20, 'Máximo de 20 caracteres').required('Campo obrigatório'),
        status: yup.string().required('Campo obrigatório'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    }= useForm<ITechs>({resolver: yupResolver(schema)})

    const addNewTechs = (data: ITechs) =>{
        
        kenzieHubApi.post('/users/techs', data)
        .then((res)=>{
            setAllTechs([...allTechs, res.data])
            toast.success('Tecnologia cadastrada com sucesso!', {autoClose: 2000})
        })
        .catch((err)=>{
            toast.error('Essa tecnologia já está na sua lista', {autoClose: 2000})
        })
        setAddModal(false)
    }

    return (
        <ModalAddTechs className={addModal? 'showModal': 'hiddenModal'}>
            <DivHeaderAdd>
                <h2>Cadastrar Tecnologia</h2>
                <button onClick={()=> setAddModal(false)}>X</button>
            </DivHeaderAdd>
            <DivForm>
                <Form onSubmit={handleSubmit(addNewTechs)}>

                    <label>Título</label>
                    <input
                    type="text"
                    placeholder='Título'
                    {... register('title')}
                    />
                    <Error>{errors.title?.message}</Error>
                    <label>Selecione Status</label>
                    <select
                    {... register('status')}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <Error>{errors.status?.message}</Error>
                <button type='submit' >Adicionar</button>
                </Form>
            </DivForm>
        </ModalAddTechs>
    )
}

export default AddTechs
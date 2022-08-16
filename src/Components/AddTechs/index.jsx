
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { kenzieHubApi } from '../../Services/kenzieHubApi';

import { ModalAddTechs, DivHeaderAdd, DivForm, Form, Error } from "./styles"
import './styles.js'

const AddTechs = ({addModal, setAddModal, allTechs, setAllTechs}) =>{

    const schema = yup.object().shape({
        title: yup.string().max(20, 'Máximo de 20 caracteres').required('Campo obrigatório'),
        status: yup.string().required('Campo obrigatório'),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    }= useForm({resolver: yupResolver(schema)})

    const addNewTechs = (data) =>{
        
        kenzieHubApi.post('/users/techs', data)
        .then((res)=>{
            setAllTechs([...allTechs, res.data])
            toast.success('Tecnologia cadastrada com sucesso!', {autoclose: 2000})
        })
        .catch((err)=>{
            toast.error('Essa tecnologia já está na sua lista', {autoclose: 2000})
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
                    name='status'
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
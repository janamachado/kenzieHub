import styled from 'styled-components'

export const ModalAddTechs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: fixed;
    width: 300px;
    height: 320px;

    background-color: #212529;
`
export const DivHeaderAdd = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    background-color: #343B41;
    
    margin-bottom: 20px;
    width: 100%;
    padding: 8px 0px;
    h2{
        font-style: normal;
        font-weight: 700;
        font-size: 13px;
        line-height: 24px;
    }
    button{
        background-color: transparent;

        width: 30px;
        height: 30px;

        border: 2px solid #868E96;
        border-radius: 20px;
        color: #868E96;
        font-weight: 800;

        cursor: pointer;

        &:hover{
        border: 2px solid #fff;
        color: #fff;
        }   
    }
`

export const DivForm = styled.div`
    display: flex;
    flex-direction: column;

    width: 250px;
    height: 280px;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    label{
        font-size: 12px;
        margin: 5px;
    }
    input{
        background-color: #343B41;
        color: #fff;
     
        border: 2px solid #fff;
        padding: 10px;
        margin: 5px;
        border-radius: 6px;
        &:focus-visible {
        outline: 3px solid #FF577F;
        border-radius: 5px;
        border-style: none;
    }
    }
    select{ 
        background-color: #343B41;
        color: #fff;
     
        border: 2px solid #fff;
        padding: 10px;
        margin: 5px;
        border-radius: 6px;
        font-size: 14px;
        margin-bottom: 10px;
     
        cursor: pointer;
        &:focus-visible {
        outline: 3px solid #FF577F;
        border-radius: 5px;
        border-style: none;
    }
    }
    button{
        background-color: #FF577F;
        color: #fff;

        padding: 15px;
        margin: 5px;
        border: none;
        border-radius: 6px;
        font-size: 14px;
        
        cursor: pointer;
        &:hover{
            background-color: #59323F;
        }
    }
`

export const Error = styled.span`
    color: #f10;
    font-size: 10px;
    margin: 5px 0px;
`
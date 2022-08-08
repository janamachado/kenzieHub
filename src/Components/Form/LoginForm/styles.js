import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 290px;
    max-height: 500px;
    margin: auto;
    margin-top: 50px;
    border-radius: 5px;
    padding: 10px;

    background-color: #212529;
    color: #F8F9FA;

    h3{
        font-size: 12px;
        margin: 10px 0;
    }

`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;

    label{
        font-size: 12px;
        font-weight: 600;
        margin: 10px 0;
    }
`

export const DivTitle = styled.div`
            display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    h1{
    font-weight: 500;
    font-size: 25px;
    }
`

export const InputLogin = styled.input`
        width: 250px;
        height: 35px;

        padding: 0 8px;
        border-style: none;
        border-radius: 4px;

        background-color: #343B41;
        color: grey;

        font-size: 14px;

        &:focus-visible {
            outline: 3px solid #FF577F;
            border-radius: 5px;
            border-style: none;
        }
`

export const ButtonLogin = styled.button`

    width: 265px;
    height: 45px;
    border-radius: 4px;
    margin: 30px 0;
    border: none;

    background-color: #FF577F;
    color: #fff;

    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #59323F;
    }

`

export const ButtonRegister = styled.button`
    width: 265px;
    height: 45px;
    border-radius: 4px;
    margin-top: 10px;
    border: none;
    margin-bottom: 20px;

    background-color: #868E96;
    color: #fff;

    font-weight: 600;
    cursor: pointer;

    &:hover{
        background-color: #343B41;
    }
`

export const Error = styled.span`
    color: #f10;
    font-size: 10px;
    margin: 5px 0px;
`
import styled from 'styled-components'

export const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 290px;
    max-height: 670px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 45px;
    border-radius: 5px;
    padding: 30px 10px;

    background-color: #212529;
    color: #F8F9FA;
`

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    h1{
        font-weight: 500;
        font-size: 25px;
        margin-bottom: 10px;
    }
    p{
        font-size: 10px;
        color: #868E96;
    }
    label{
        font-size: 12px;
        font-weight: 600;
        margin: 7px 0;
    }
    select{
        background-color: #212529;
        color: #fff;
        font-size: 14px;
        width: 265px;
        height: 35px;
    }
`;

export const InputText = styled.input`
    width: 250px;
    height: 33px;
    
    padding: 0 8px;
    border-style: none;
    border-radius: 4px;
    font-size: 14px;
    
    background-color: #343B41;
    color: grey;


    &:focus-visible {
        outline: 3px solid #FF577F;
        border-radius: 5px;
        border-style: none;
    }
`;

export const ButtonRegister = styled.button`
    width: 265px;
    height: 45px;

    cursor: pointer;
    border: none;
    margin-top: 10px;
    border-radius: 4px;
    font-weight: 600;

    background-color: #FF577F;
    color: #fff;

    &:hover{
        background-color: #59323F;
    }
`

export const Error = styled.span`
    color: #f10;
    font-size: 10px;
    margin: 2px 0px;
`
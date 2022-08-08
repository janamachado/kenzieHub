import styled from 'styled-components'


export const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 316px;
    height: 30px;
    margin-left: 585px;
    margin-top: 50px;

    button{
        cursor: pointer;
        font-weight: 600;
        font-size: 16px;

        border-radius: 8px;
        width: 90px;
        padding: 15px;

        background-color: #212529;
        color: #fff;

        &:hover{
            background-color: #343B41;
        }
    }

`
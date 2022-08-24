import styled from 'styled-components'

export const DivContainerLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 30px;
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
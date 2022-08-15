import styled from 'styled-components'

export const DivHeader = styled.div`
    display: flex;

`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 80px;

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

export const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    width: 100vw;
    height: 150px;

    box-shadow: 0.3px 0px 0px 0.3px #868E96;

    h2{
        color: #fff;
        font-size: 16px;
    }

    span{
        color: #868E96;
        font-size: 12px;
    }

`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;


    color: #fff;

    margin: 0 auto;
    padding: 20px;
    width: 560px;

    h3{
        color: #fff;
        margin-bottom: 40px;
    }

    p{
        color: #fff;
    }

`

export const DivHeaderTechs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    width: 100vw;
    height: 50px;
    padding: 7px 7px;
`

export const ButtonClose = styled.button`
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
`





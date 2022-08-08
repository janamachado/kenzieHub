import styled from 'styled-components'

export const DivContainer = styled.div`
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
    align-items: flex-start;

    margin: 70px 300px;

    h3{
        color: #fff;
        margin-bottom: 40px;
    }

    p{
        color: #fff;
    }

`
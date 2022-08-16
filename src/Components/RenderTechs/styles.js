import styled from 'styled-components'

export const ListTechsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #212529;

    width: 650px;
    border-radius: 7px;
    padding: 15px 15px;
    margin: 20px 10px;

    ul{
        max-height: 300px;

        overflow: scroll;

        ::-webkit-scrollbar{
            width: 0px;
        }
    }
    h2{
        font-size: 15px ;
    }
`

export const LiTechs = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #121214;

    height: 50px;
    width: 600px;
    padding: 0px 15px;
    margin: 10px 0px;
    border-radius: 7px;

    strong{
        margin-left: 10px;
        font-size: 14px;
    }
    div{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    p{
        margin: 20px;
    }

    span{
        background-color: transparent;
        color:#868E96;
        
        border: none;
        cursor: pointer;
    }

`
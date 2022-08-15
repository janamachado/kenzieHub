import styled from 'styled-components'



export const ListTechsDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: #212529;


    width: 1000px;
    border-radius: 7px;

    padding: 20px 15px;
    margin: 30px 10px;

    ul{
        width: 900px;
        max-height: 300px;
        overflow: scroll;

        ::-webkit-scrollbar{
            width: 0px;
        }
    }


`

export const LiTechs = styled.li`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: #121214;

    /* width: 950px; */
    height: 50px;
    padding: 0px 5px;

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
        border: none;
        color:#868E96;
        cursor: pointer;
    }

`
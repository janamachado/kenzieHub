import Form from "../../Components/Form/RegisterForm"
import { useNavigate } from "react-router-dom"

// import logo from "../../img/Logo.png"
import { DivContainer } from "./styles"

const Register = () =>{

    const navigate = useNavigate()

    function goLogin (){
        navigate('/Login', {replace: true})
    }
    
    return (
        <>
            <DivContainer>
                <img src={logo} alt="" />
                <button onClick={goLogin}>Login</button>
            </DivContainer>
            <Form/>
        </>
    )
}

export default Register
import LoginForm from "../../Components/Form/LoginForm"

import logo from "../../img/Logo.png"
import { DivContainer } from "./styles"



const Login = () =>{
    return (
        <>
            <DivContainer>
                <img src={logo} alt="" />
            </DivContainer>
            <LoginForm/>
        </>
    )
}

export default Login
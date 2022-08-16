import LoginForm from "../../Components/Form/LoginForm"
import logo from "../../img/Logo.png"

import { DivContainerLogin } from "./styles"

const Login = () =>{
    return (
        <>
            <DivContainerLogin>
                <img src={logo} alt="" />
            </DivContainerLogin>
            <LoginForm/>
        </>
    )
}

export default Login
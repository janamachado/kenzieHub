import { toast } from "react-toastify"
import LoginForm from "../../Components/Form/LoginForm"
import logo from "../../img/Logo.png"

import { DivContainerLogin } from "./styles"

const Login = () =>{
    return (
        <>
            {toast.error('Necessário fazer Login', {toastId: 'success1', autoClose: 2000 })}
            <DivContainerLogin>
                <img src={logo} alt="" />
            </DivContainerLogin>
            <LoginForm/>
        </>
    )
}

export default Login
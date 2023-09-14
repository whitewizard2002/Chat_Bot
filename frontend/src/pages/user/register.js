import RegisterForm from "../../components/RegisterForm";
import '../../css/page/register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterPage(){
    return <div className="fluid-container background">
        <div className="row mx-auto">
            <RegisterForm/>
        </div>
    </div>
}

export default RegisterPage;
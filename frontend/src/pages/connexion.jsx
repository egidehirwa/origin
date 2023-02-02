import ConnexionForm from "../components/forms/connexionForm"
import RegisterForm from "../components/forms/registerForm"



const ConnexionPage = () => {
    return (
        <div className="flex justify-center h-full lg:divide-x-2">
            <ConnexionForm />
            <RegisterForm />
        </div>
    )
}

export default ConnexionPage;
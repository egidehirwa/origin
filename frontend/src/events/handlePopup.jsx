// const loginButton = document.getElementById('login')

const handleShowConnect = () => {
    const loginScreen = document.querySelector('#showHideConnexionPopup')
    loginScreen.classList.add("showConnexion");

}

const handleHideConnect = () => {
    const loginScreen = document.querySelector('#showHideConnexionPopup')
    loginScreen.classList.remove("showConnexion")
}

const handleShowRegisterPopup = () => {
    const signUpScreen = document.querySelector('#showHideRegisterPopup')
    // showRegister
    signUpScreen.classList.add("showRegister")
    console.log('')

}

const handleHideRegisterPopup = () => {
    const signUpScreen = document.querySelector('#showHideRegisterPopup')
    signUpScreen.classList.remove("showRegister")

}

// const login = () => {
// if connexion good -> do that
// if connexion is not good then says "wrong email or password"
// }

export { handleShowConnect, handleHideConnect, handleShowRegisterPopup, handleHideRegisterPopup };
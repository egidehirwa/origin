const popUpScreen = document.getElementById('popup')
// const loginButton = document.getElementById('login')

const emailConnexionEvent = () => {

    popUpScreen.classList.add("showConnexion");

}

const backHome = () => {
    popUpScreen.classList.remove("showConnexion")
}

// const login = () => {
// if connexion good -> do that
// if connexion is not good then says "wrong email or password"
// }

export { emailConnexionEvent, backHome };
// const loginButton = document.getElementById('login')

const emailConnexionEvent = () => {
    const popUpScreen = document.querySelector('#popup')
    popUpScreen.classList.add("showConnexion");

}

const backHome = () => {
    const popUpScreen = document.querySelector('#popup')
    popUpScreen.classList.remove("showConnexion")
}

// const login = () => {
// if connexion good -> do that
// if connexion is not good then says "wrong email or password"
// }

export { emailConnexionEvent, backHome };
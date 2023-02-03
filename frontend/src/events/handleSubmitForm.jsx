import axios from "axios";

// connection
async function handleSubmitConnect(e, email, password, setAuthentificated, navigate) {

    e.preventDefault();
    const response = await userLogin(email, password)

    if (response === 'error') {
        console.log('connection of user failed')
        navigate("/connexion")
        // set authentificated state to false (default)
        return setAuthentificated(false)
    } else {
        console.log('connection of user succeded')
        setAuthentificated(true)

        navigate("/profile")
        // set authentificated state to true
        return setAuthentificated(true)
    }
}

async function userLogin(email, password) {

    const response = await axios.post('https://origin-app.herokuapp.com/login', {
        email: email,
        password: password
    })

    if (response.data.error) {
        return 'error'
    } else {
        return 'connect'
    }
}

// Registration

function handleSubmitRegister(e, email, password) {
    e.preventDefault();
    // console.log(firstName, lastName, birthday, country, email, password );

    // 1] Create user by adding email and password to database
    // verify that email adress is not already existing

    userRegister(email, password)

    // 3] Create user profile by adding the rest of the infos there
    //  uppercase on text inputs for first letter and lowercase for rest
    // firstName, lastName, birthday, country
}

async function userRegister(email, password) {

    console.log(email, password)

    const response = await axios.post('https://origin-app.herokuapp.com/register', {
        email: email,
        password: password
    })

    console.log(response)

    console.log('Send user to DB')
}

export { handleSubmitConnect, handleSubmitRegister };
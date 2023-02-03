import axios from "axios";

// connection
async function handleSubmitConnect(e, email, password, authentificated, setAuthentificated) {

    e.preventDefault();
    const response = await userLogin(email, password)

    if (response === 'error') {
        console.log('connection of user failed')
        // set authentificated state to false (default)

        console.log('failed')
        console.log(authentificated)
        return setAuthentificated(true)
    } else {
        console.log('connection of user succeded')
        // set authentificated state to true (default valuer is false -> false a false value = true ) 
        // (and allow connection and redirection to profile)

        console.log('succeded')
        console.log(authentificated)
        return setAuthentificated(false)
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
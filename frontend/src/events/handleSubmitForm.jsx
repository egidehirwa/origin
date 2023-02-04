import axios from "axios";

// connection
async function handleSubmitConnect(e, email, password, authentificated, setAuthentificated, navigate) {

    e.preventDefault();
    const response = await userLogin(email, password)

    if (response === 'error') {
        console.log('connection of user failed')
        navigate("/connexion")
    } else {
        console.log('connection of user succeded')
        // navigate("/profile/:id")
    }
    return setAuthentificated(response !== 'error')
}

async function userLogin(email, password) {
    try {
        const response = await axios.post('https://origin-app.herokuapp.com/login', {
            email: email,
            password: password
        })
        // console.log(response)
        if (response.data.error) {
            return 'error'
        } else {
            return 'connect'
        }
    } catch (error) {
        return 'server error'
    }
}

// Registration

function handleSubmitRegister(e, email, password, firstName, lastName, birthday, country) {
    e.preventDefault();
    // console.log(firstName, lastName, birthday, country, email, password );

    // 1] Create user by adding email and password to database
    // userRegister(email, password)

    // 3] Create user profile by adding the rest of the infos there
    //  uppercase on text inputs for first letter and lowercase for rest
    userProfile(firstName, lastName, birthday, country)
}

async function userRegister(email, password) {

    // console.log(email, password, firstName, lastName, birthday, country)
    const responseRegister = await axios.post('https://origin-app.herokuapp.com/register', {
        email: email,
        password: password
    })
    console.log(responseRegister)
    console.log('Send user to DB')
}

async function userProfile(firstName, lastName, birthday, country) {

    const date = new Date(birthday)
    console.log(date, typeof date)

    const responsePofile = await axios.post('https://origin-app.herokuapp.com/profile/:27/insertProfileInfos', {
        name: firstName,
        lastname: lastName,
        date_of_birth: date,
        place_of_birth: country,
    })

    console.log(responsePofile)
    console.log('Add profile infos')
}

export { handleSubmitConnect, handleSubmitRegister };
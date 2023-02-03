import axios from "axios";

// connection
function handleSubmitConnect(e, email, password) {
    e.preventDefault();
    console.log(email, password)

    userLogin(email, password)
}

async function userLogin(email, password){

    const response = await axios.post('https://origin-app.herokuapp.com/login', {
        email: email,
        password: password
    })

    console.log(response)

    console.log('fetched some stuff')
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

async function userRegister(email, password){

    console.log(email, password)

    const response = await axios.post('https://origin-app.herokuapp.com/register', {
        email: email,
        password: password
    })

    console.log(response)

    console.log('Send user to DB')
}

export { handleSubmitConnect, handleSubmitRegister };
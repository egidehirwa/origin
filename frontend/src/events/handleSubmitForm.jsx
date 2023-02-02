
function handleSubmitConnect(e) {
    e.preventDefault();
    console.log(e.target)
}

function handleSubmitRegister(e) {
    e.preventDefault();
    console.log('You clicked submit.');
}

export { handleSubmitConnect, handleSubmitRegister };
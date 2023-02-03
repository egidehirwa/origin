function handleClickSignUp(e) {
    const registerPage = document.querySelector('#registerPage')

    e.preventDefault();
    registerPage.classList.add('registerMobile')


    // console.log('You clicked sign up.');
}

function handleClickLogin(e) {
    const connexionPage = document.querySelector('#connexionPage')

    e.preventDefault();
    connexionPage.classList.add('registerMobile')
}

function handleClickClose(e) {
    const registerPage = document.querySelector('#registerPage')
    const connexionPage = document.querySelector('#connexionPage')

    e.preventDefault();

    registerPage.classList.remove('registerMobile')
    connexionPage.classList.remove('registerMobile')
}

export { handleClickSignUp, handleClickLogin, handleClickClose };
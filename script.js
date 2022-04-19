const init = () =>{
    const inputEmail = document.querySelector('input[type="email"]');
    const inputPassowrd = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector('.login_submit');

    console.log(inputEmail, inputPassowrd, submitButton)

}

window.onload = init;
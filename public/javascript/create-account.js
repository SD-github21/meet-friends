async function signupFormHandler(event){
    event.PreventDefault();

    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    let user;

    if(email & password){
         user = {
            email: email,
            password: password
        }
        document.location = '/homepage'
        return user;
    }
};


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
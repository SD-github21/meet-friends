// handler for login 
async function loginFormHandler(event) {
    event.preventDefault();
    // once listener is triggered grab email and password from sign in form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  // if an email and password is found do a fetch to check if it is correct
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
    }
  }
  // listener for login 
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  
 

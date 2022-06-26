<<<<<<< HEAD
async function loginFormHandler(event) {
=======
async function login(event) {
>>>>>>> teamBranch
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
<<<<<<< HEAD
      const response = await fetch('/api/users/login', {
=======
      const response = await fetch('api/users/login', {
>>>>>>> teamBranch
        method: 'post',
        body: JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
<<<<<<< HEAD
      } else {
        alert(response.statusText);
=======
        console.log("signed in");
      } else {
        alert(response.statusText);
        
>>>>>>> teamBranch
      }
    }
  }
  
<<<<<<< HEAD
  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
  

=======
  
  document.querySelector('#login').addEventListener('submit', login);
  console.log('hello');
>>>>>>> teamBranch
  
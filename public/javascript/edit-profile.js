async function editProfileHandler(event){
    event.preventDefault();

    
      const first_name = document.querySelector('#first_name').value.trim();
      const last_name = document.querySelector('#last_name').value.trim();
      const city = document.querySelector('#city').value.trim();
      const state= document.querySelector('#state').value.trim();
      const dob = document.querySelector('#dob').value.trim();
      const email = user.email;
      const password = user.password;
  
   const response = await fetch(`/api/profile/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        first_name,
        last_name,
        email,
        password,
        city, 
        state, 
        dob,
        gender,
        avatar
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert(response.statusText);
    }
  }

  async function deleteProfileHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/${id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
  
document.querySelector('.save-profile-btn').addEventListener('submit', editProfileHandler)
document.querySelector('.delete-profile-btn').addEventListener('submit', deleteProfileHandler)
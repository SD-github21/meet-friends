async function editProfileHandler(event){
    event.preventDefault();

    
    const name = document.querySelector('input[name=""]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    
    ]
  
   const response = await fetch(`/api/profile/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        
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

document.querySelector('.edit-post-form').addEventListener('submit', editProfileHandler)
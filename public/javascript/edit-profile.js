async function editProfileHandler(event){
    event.preventDefault();

      // update info....
    const name = document.querySelector('input[name=""]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    
    ]
  //add profile body
   // const response = await fetch(`/api/profile/${i`, {
      method: 'PUT',
      body: JSON.stringify({
        
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

document.querySelector('.edit-post-form').addEventListener('submit', editProfileHandler)
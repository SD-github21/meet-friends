async function editProfileHandler(event){
    event.preventDefault();

    
      const first_name = document.querySelector('#first_name').value.trim();
      const last_name = document.querySelector('#last_name').value.trim();
      const city = document.querySelector('#city').value.trim();
      const state= document.querySelector('#state').value.trim();
      const dob = document.querySelector('#dob').value.trim();
      const gender = document.querySelector('#gender').value.trim();
      
  
   const response = await fetch(`/api/users/edit/${user_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        first_name,
        last_name,
        city, 
        state, 
        dob,
        gender,
        email
        
        
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

  function deleteProfileHandler(event) {
    event.preventDefault();
  
    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = fetch(`/api/users/delete/${user_id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      console.log("hey you")
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };

  async function profileImgUpload(event){
    event.preventDefault();
  }
  const user_id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const uploadImg = new FormData();

  // /img/${variableIMAGENAME} user avatar 
  const response = fetch(`/api/users/upload/${user_id}`, {
    method: 'PUT',
    body: JSON.stringify({
      avatar: 'profile-image'
    
   })

  });
  if (response.ok){
    console.log('Hey Good Looking')
  }

document.querySelector('.save-profile-btn').addEventListener('click', editProfileHandler)
document.querySelector('.delete-profile-btn').addEventListener('click', deleteProfileHandler)
document.querySelector('#img-btn').addEventListener('submit', profileImgUpload)
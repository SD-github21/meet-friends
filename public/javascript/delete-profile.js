async function deleteProfileHandler(event) {
    event.preventDefault();
  
    const user_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    const response = await fetch(`/api/users/delete/${user_id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      console.log("hey you")
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }

 document.querySelector('.delete-post-btn').addEventListener('click', deleteProfileHandler);
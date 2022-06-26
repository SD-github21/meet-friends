async function editPostHandler(event){
    event.preventDefault();

      // update info....
    const activity = document.querySelector('post-activity').value;

    
  
   const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({
        uid,
        activity
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }


  async function deletePostHandler(event) {
    event.preventDefault();
  
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
   
     response = await fetch(`/api`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }



document.querySelector('.delete-post-btn').addEventListener('click', deletePostHandler);
document.querySelector('.edit-post-btn').addEventListener('submit', editPostHandler)
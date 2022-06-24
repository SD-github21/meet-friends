async function editPostHandler(event){
    event.preventDefault();

      // update info....
    const title = document.querySelector('input[name=""]').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ]
  
   // const response = await fetch(`/api/posts/${i`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
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

document.querySelector('.edit-post-form').addEventListener('submit', editPostHandler)
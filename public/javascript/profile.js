// this function handles the updating of user profile photo pathing
function imgUploadHandler(event){
    // if the button clicked is the img button   
    if(event.target.id === 'img-btn'){    
        // grab the file name
        const fileName = document.querySelector('#img-file-field').files[0].name;
        const avatar = fileName;
        // does a fetch to update pathing using file name
        fetch('/api/users/avatar/:id', {
            method: 'PUT',
            body: JSON.stringify({
                avatar
            }),
            headers: {
                'Content-Type': 'application/json'
              }
          
        })
       
     
    };
    
}
   




document.querySelector('#upload-div').addEventListener('click', imgUploadHandler);
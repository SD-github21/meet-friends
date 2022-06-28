
function imgUploadHandler(event){
       
    if(event.target.id === 'img-btn'){    
        const fileName = document.querySelector('#img-file-field').files[0].name;
        const avatar = fileName;

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
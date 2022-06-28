
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
   



function deletePostHandler(event){
  
    if(event.target.id === 'deleteBtn'){
        // event.preventDefault();
        const uniqueId = event.target.parentElement.attributes[1].value;
        const userId = event.target.parentElement.attributes[3].value;
        const activityId = event.target.parentElement.attributes[2].value;

        // console.log('This is the UniqueEventId ' + uniqueId );
        // console.log('This is the user_id ' + userId);
        // console.log('This is the activity_id ' + activityId);

        fetch('/api/users/find', {
            method: 'POST',
            body: JSON.stringify({
                activity_id: activityId,
                user_id : userId
            }),
            headers: {
                'Content-Type': 'application/json'
              }
          })
          .then(response => response.json())
          .then(data => {
                fetch(`/api/users/user-activity/${data.id}`,{
                    method: 'DELETE'
                })
                .then(response => response.json()).then(responseData => console.log(responseData)).catch(err => console.log(err));
            
          })
          .catch(err => console.log(err));

        fetch(`/api/unique/${uniqueId}`,{
            method:'DELETE'
        }).then(response => response.json()).then(responseData => location.reload()).catch(err => console.log(err));
       
        
    };

 }

  







document.querySelector('#activity-card-container').addEventListener('click' , deletePostHandler);
document.querySelector('#upload-div').addEventListener('click', imgUploadHandler);
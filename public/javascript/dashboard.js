





const clickHandler = (event)=>{
    const activityId = event.target.attributes[2].value;
    const isBtn = 'activityBtn';
    
    if(event.target.name === isBtn && activityId){
        const response =  fetch(`/api/activities/${activityId}`,{
            method: 'GET'
        }).then(response =>response.json() )
        .then(data => console.log(data))


    }
    
    
};





document.querySelector('#activities-div').addEventListener('click', clickHandler);
/** @format */


async function addActivity(event) {
   event.preventDefault();
    
  
    const activityCategory = document.querySelector("#activityCategory").value;
    const activityLocation = document.querySelector("#activityLocation").value.trim();
    const activityAddress = document.querySelector("#activityAddress").value.trim();
    const activityCity = document.querySelector("#activityCity").value.trim();
    const activityState = document.querySelector("#activityState").value.trim();
  
    const activity = {
      category: activityCategory,
      location: activityLocation,
      address: activityAddress,
      city: activityCity,
      state: activityState,
    };
  
  
  
    if(activity.category && activity.location && activity.address && activity.address && activity.city &&activity.state){

      
       fetch(`api/activities/${activity.category}`,{
          method:'GET',
          })
            .then(actData => actData.json() )
            .then(parsedActData => {
               
                activity.category = parsedActData.id
                    fetch(`api/users/user-activity`,{
                            method:"POST",
                            body:JSON.stringify({
                                                    category: parsedActData.id,  
                                                }),
                             headers:{ 'Content-Type': 'application/json' }
                        })
                        .then(data => {
                            fetch(`/api/unique`, {
                                method: 'POST',
                                body: JSON.stringify({
                                    location_name: activity.location,
                                    address: activity.address,
                                    activity_id: activity.category,
                                    city: activity.city,
                                    state: activity.state
                                }),
                                  headers: {
                                    'Content-Type': 'application/json'
                                  }
                            }).catch(err => console.log(err));
                            
                               
                        })
                        .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err));
      
         
         
        
    }
  
  
  }

  
      
      // const response1 = await fetch(`/api/users/user-activity`,{
      //   method:'POST',
      //   body: JSON.stringify({
      //     activity.activityCategory
      //   })
      // })
    
  
  
  document.querySelector("#post-activity-form").addEventListener("submit", addActivity);

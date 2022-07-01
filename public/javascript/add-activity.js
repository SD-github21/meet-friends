/** @format */

// function for adding activity
async function addActivity(event) {
   event.preventDefault();
    
  // grabs all the form data 
    const activityCategory = document.querySelector("#activityCategory").value;
    const activityLocation = document.querySelector("#activityLocation").value.trim();
    const activityAddress = document.querySelector("#activityAddress").value.trim();
    const activityCity = document.querySelector("#activityCity").value.trim();
    const activityState = document.querySelector("#activityState").value.trim();

  // sets all the form activity to an object
    const activity = {
      category: activityCategory,
      location: activityLocation,
      address: activityAddress,
      city: activityCity,
      state: activityState,
    };
  
  
  // if all the data exists then do a fetch request
    if(activity.category && activity.location && activity.address && activity.address && activity.city &&activity.state){

      // does a get request to find the activity category to get the number
       fetch(`api/activities/${activity.category}`,{
          method:'GET',
          })
            .then(actData => actData.json() )
            .then(parsedActData => {
               
                activity.category = parsedActData.id
                // does a fetch to post - to add the activity to the database "category" that links via through - table
                    fetch(`api/users/user-activity`,{
                            method:"POST",
                            body:JSON.stringify({
                                                    category: parsedActData.id,  
                                                }),
                             headers:{ 'Content-Type': 'application/json' }
                        })
                        .then(data => {
                          // does a fetch to post the unique activity and all its data
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
                            
                            location.reload();
                               
                        })
                        .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err));
      
         
         
        
    }
  
  
  }

  
      
  
    
  
  // listener for form submit
  document.querySelector("#post-activity-form").addEventListener("submit", addActivity);
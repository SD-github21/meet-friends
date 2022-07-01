/** @format */




// code that creates the dashboard data section when buttons are selected 
const dashboardSectionData = (activityData) => {
  const people = activityData.users.map((user) => {
    return ` 
    <div class ="card-div  justify-content-center m-2"  >
        <a href="/profile/${user.id}"> <div class='card-cover'></div></a>
     
        <div class="card" style='width: 338.58px; height: 100%;'>
            <div class="card-img-top"  style='width: 100%; height: 50%; background-image: url("../img/${user.avatar}"); background-size: cover; background-position: center;  '></div>
            
            <div class="card-body p-3" '>              
                <h3 class="card-subtitle profileName p-2" >${user.first_name}</h3>
                <p class="card-text profileDet p-2 pt-3">Location: ${
                    user.city + ' , '+ user.state
                }</p>
                <p class="card-text profileDet p-2" > Age: ${user.age}</p>
                
            </div>
        </div>
    </div>
   
        
        `;
  });


  return people;
};
// click handler for button clicks
const clickHandler = (event) => {
  const activityId = event.target.attributes[2].value;
  const isBtn = "activityBtn";
  

  if(event.target.name === isBtn && activityId){
      const response =  fetch(`/api/activities/${activityId}`,{
          method: 'GET'
      })
      .then(response => response.json() )
      .then(activityData => {
          
          const dashboardSectionEL = document.querySelector('#activities-div');

          if(activityData.users){
              dashboardSectionEL.innerHTML = `
              ${dashboardSectionData(activityData)}

              `
          }

      });

  }
};
// listener for click of a dashboard button
document
  .querySelector("#activities-div")
  .addEventListener("click", clickHandler);

/** @format */



//col-12 col-md-2

const dashboardSectionData = (activityData) => {
  const people = activityData.users.map((user) => {
    return ` 
    <div class ="card-div  justify-content-center m-2"  >
        <div class='card-cover' data-user="${user.id}"></div>
     
        <div class="card" style='width: 100%; height: 100%;'>
            <div class="card-img-top"  style='width: 100%; height: 50%; background-image: url("../img/${user.avatar}"); background-size: cover; background-position: center;  '></div>
            
            <div class="card-body" style='width: 100%; height: 15%;'>              
                <h3 class="card-subtitle mb-2 profileName" style='width: 100%; height: 100%;>${user.first_name}</h3>
                <p class="card-text profileDet" style='width: 100%; height: 100%;>Location: ${
                    user.city + ' , '+ user.state
                }</p>
                <p class="card-text profileDet" > Age: ${user.age}</p>
                
            </div>
        </div>
    </div>
   
        
        `;
  });

  console.log(people);
  return people;
};

const clickHandler = (event) => {
  const activityId = event.target.attributes[2].value;
  const isBtn = "activityBtn";
  console.log(event.target);

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

document
  .querySelector("#activities-div")
  .addEventListener("click", clickHandler);

/** @format */

const dashboardSectionData = (activityData) => {
  const people = activityData.users.map((user) => {
    return `
    <div class =" col-4 justify-content-center">
        <div class="card bg-light bg-opacity-25 rounded shadow" style="width: 20rem;">
            <img class="card-img-top" src="../img/${
              user.avatar
            }" alt="Profile Image">
            
            <div class="card-body">   
                <!--Profile info fill in proper terms-->            
                <h3 class="card-subtitle mb-2 profileName">${user.first_name}</h3>
                <p class="card-text profileDet">Location: ${
                    user.city + ' , '+ user.state
                }</p>
            <p class="card-text profileDet">${user.dob}</p>
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
  
  if(event.target.name === isBtn && activityId){
      const response =  fetch(`/api/activities/${activityId}`,{
          method: 'GET'
      })
      .then(response => response.json() )
      .then(activityData => {
          console.log(activityData.users);
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

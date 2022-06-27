/** @format */

//req.session.user_id

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


  
}

document.querySelector("#post-activity-form").addEventListener("submit", addActivity);

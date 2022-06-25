/** @format */

// makes sure only one check box is checked 
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('gendercheck')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });
};


async function signupFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const signUpSection = document.querySelector("#sign-up");
  let user;

 if (email && password) {
    user = {
      email: email,
      password: password,
    };

    signUpSection.innerHTML = 
    `
    <form id ="profile-create" class ="p-5 m-5">
    <h2>Create your profile</h2>
    <div class="form-group">
        <label for="first_name">First Name</label>
        <input type="text" class="form-control" id="first_name" placeholder="John">
    </div>
    <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control" id="last_name" placeholder="Doe">
    </div>
    <div class="form-group">
        <label for="first_name">City</label>
        <input type="text" class="form-control" id="city" placeholder="Austin">
    </div>
    <div class="form-group">
        <label for="last_name">Last Name</label>
        <input type="text" class="form-control" id="state" placeholder="Texas">
    </div>
    <div class="form-group">
        <label for="dob">DOB</label>
        <input type="date" class="form-control" id="dob" placeholder="dob">
    </div>
    <div class="form-group">
        <label for="gender">Gender</label>
        <label for="male">Male</label>
        <input type="checkbox" class="form-control" name='gendercheck' placeholder="Male" onclick="onlyOne(this)">
        <label for="female">female</label>
        <input type="checkbox" class="form-control" name='gendercheck' placeholder="Female" onclick="onlyOne(this)">
    </div>
 
  
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
    
  }
}

console.log("test tes test");
document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);

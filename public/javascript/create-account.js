/** @format */



// init user variable
let user;
let gender;
// makes sure only one check box is checked 
function onlyOne(checkbox) {
    gender = checkbox.placeholder;
    var checkboxes = document.getElementsByName('gendercheck')
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });
};


async function signupFormHandler(event) {
  event.preventDefault();
  console.log('test2');

  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const signUpSection = document.querySelector("#sign-up");
  

 if (email && password.length >= 4 ) {
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
        <label for="city">City</label>
        <input type="text" class="form-control" id="city" placeholder="Austin">
    </div>
    <div class="form-group">
        <label for="state">State</label>
        <input type="text" class="form-control" id="state" placeholder="Texas">
    </div>
    <div class="form-group">
        <label for="dob">DOB</label>
        <input type="date" class="form-control" id="dob" placeholder="dob">
    </div>
    <div class="form-group">
        <label for="gender">Gender</label><br>
        <label for="male">Male</label>
        <input type="checkbox" class="form-control" name='gendercheck' placeholder="Male" onclick="onlyOne(this)">
        <label for="female">female</label>
        <input type="checkbox" class="form-control" name='gendercheck' placeholder="Female" onclick="onlyOne(this)">
    </div>
 
  
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
  `;
  document.querySelector("#profile-create").addEventListener("submit", createProfileHandler);
  };
  
};

async function createProfileHandler(event){
    event.preventDefault();

    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state= document.querySelector('#state').value.trim();
    const dOB = document.querySelector('#dob').value.trim();
    const email = user.email;
    const password = user.password;

    console.log(dOB, gender);

    if(firstName && lastName && city && state && dOB){
        const response = await fetch('api/users',{
            method: 'POST',
            body: JSON.stringify({
                firstName,
                lastName,
                city,
                state,
                dOB,
                email,
                password,
                gender
            }),
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.ok){
            document.location.replace('/dashboard');
        }else{
            alert(response.statusText);
        }
    };
    

};


document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);


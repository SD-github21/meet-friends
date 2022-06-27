/** @format */





// setup variable for user data
let user;
// setup a variable to assign gender to
let gender;


// grabs the checkboxes with the name "gendercheck" and verifies only one is checked
function onlyOne(checkbox) {
    // assigns the gender variable to the current checked gender
    gender = checkbox.placeholder;
    // grabs all the check boxes with name = gendercheck
    var checkboxes = document.getElementsByName('gendercheck')
    // filters the checkboxes checking for checked boxes and unchecking them.
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    });
};

// Sign up form submit handler
async function signupFormHandler(event) {
  event.preventDefault();
  
  // grabs info for form and assigns to variables
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const signUpSection = document.querySelector("#sign-up");
  const emailLabel = document.querySelector("#email-label");
// checks if an email and password longer than 4 characters has been entered
 if (email && password.length >= 4 ) {
    const response =  fetch('/api/users/signup',{
        method: 'POST',
        body: JSON.stringify({
            email
        }),
        headers: { 'Content-Type': 'application/json' }
    }).then((response) =>{
        
       
        return response.json()
    }).then(userData => {
        console.log('hello' + userData);
        if(!userData){
            // assigns user info to an object
                user = {
                        email: email,
                        password: password,
                        
                       };
                       // removes the signup form and enters a new form to create a profile    
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
                           </form>`;
                           // starts the eventlistener for the new form
                            document.querySelector("#profile-create").addEventListener("submit", createProfileHandler);
        }
        emailLabel.innerHTML = `<span style = "color:red; ">*Email is already in use enter a different one!</span>`

    });
  



  
  };
  
};

// event handler for profile creation submit
async function createProfileHandler(event){
    event.preventDefault();
    // sets all the fields to variables
    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const city = document.querySelector('#city').value.trim();
    const state= document.querySelector('#state').value.trim();
    const dOB = document.querySelector('#dob').value.trim();
    const email = user.email;
    const password = user.password;
    console.log('hello create profile');
    
// if all the field are no empty does a post request
    if(firstName && lastName && city && state && dOB){
        const response = await fetch('api/users',{
            method: 'POST',
            body: JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                city,
                state,
                dob:dOB,
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
// resets gender and user.
    user = '';
    gender = '';

};


document.querySelector("#signup-form").addEventListener("submit", signupFormHandler);


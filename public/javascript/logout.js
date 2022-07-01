/** @format */
// log out function
async function logout() {
  // does a fetch to logout route
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });
// if it works send user back to homepage
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}
// listener for logout button
document.querySelector("#logout").addEventListener("click", logout);



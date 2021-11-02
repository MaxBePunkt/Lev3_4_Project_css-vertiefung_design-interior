function formChange() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  "name".value;

  console.log(name);
  console.log(email);
  console.log(message);
}

function navBar() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "block") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "block";
  }
}

//your JS code here. If required.
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
const existing = document.getElementById("existing");
const form = document.getElementById("loginForm");

// check if credentials exist in localStorage
const savedUser = localStorage.getItem("username");
const savedPass = localStorage.getItem("password");

if(savedUser && savedPass){
    existing.style.display = "block";
}

// form submit
form.addEventListener("submit", function(e){

    e.preventDefault();

    const user = username.value;
    const pass = password.value;

    alert(`Logged in as ${user}`);

    if(checkbox.checked){
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        existing.style.display = "block";
    }
    else{
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        existing.style.display = "none";
    }

});

// login as existing user
existing.addEventListener("click", function(){

    const storedUser = localStorage.getItem("username");

    if(storedUser){
        alert(`Logged in as ${storedUser}`);
    }

});
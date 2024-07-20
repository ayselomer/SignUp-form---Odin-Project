document.addEventListener('DOMContentLoaded', function () {
    console.log('hi')


})

let submitbutton = document.getElementById('submit')
submitbutton.addEventListener('click', submit)

function submit(e) {
    e.preventDefault()
    console.log('ubmit')
    let password = document.getElementById("password").value;
let confirmpassword = document.getElementById("confirmpassword").value;
let error = document.getElementById("error");
 
if (password != confirmpassword) {
    error.innerHTML = "*passwords do not match";
}

else if (password == "" && confirmpassword == "") {
    error.innerHTML = "*fill out these fields";
}

else {
    error.innerHTML = "";
}
}

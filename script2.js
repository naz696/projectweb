function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
	var gender = document.getElementById("gender").value;
	var phone = document.getElementById("phone").value;
    var feedback = document.getElementById("feedback").value;

    if (name == "" || email == "" || gender == "" || phone == "" ||feedback == "") {
        alert("All fields are required.");
        return false;
    }

    return true;
}

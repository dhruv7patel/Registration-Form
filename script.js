document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let email = document.getElementById("email").value;
        let place = document.getElementById("place").value;
        let answer = document.getElementById("answer").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let error = document.getElementById("error");
        let submitButton = document.querySelector("button[type='submit']");

        error.innerHTML = "";

        if (name === "") {
            error.innerHTML += "<p>*Yaar apna naam to daalo.*</p>";
            return false;
        }

        if (address === "") {
            error.innerHTML += "<p>*Address to dena padega Jii.*</p>";
            return false;
        }

        if (email === "" || !email.includes("@")) {
            error.innerHTML += "<p>*Ek valid email address to daliye jii (should include @).*</p>";
            return false;
        }

        if (place === "") {
            error.innerHTML += "<p>*Choose kro place. Kahi to jaenge na ghumne Jaani.*</p>";
            return false;
        }

        if (answer === "" || answer === "no") {
            error.innerHTML += "<p>*Aap No chose nhi kr skte. Vo jhuth ho jaega*</p>";
            return false;
        }

        if (password === "" || password.length < 8 || !password.match(/[!@#$%^&*(),.?":{}|<>]/)) {
            error.innerHTML += "<p>*Password atleast 8 characters hona chahiye with atleast one special character.*</p>";
            return false;
        }

        if (confirmPassword !== password) {
            error.innerHTML += "<p>*Passwords to match hone chahiye Jii.</p>";
            return false;
        }

        submitButton.textContent = "Submitted";

        submitButton.style.backgroundColor = "orange";
        submitButton.style.color = "white";

        alert("Registration Successful :)");

        return true;
    });
});

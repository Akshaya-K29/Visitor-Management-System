function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:9099/visitors/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            email: email.trim().toLowerCase(),
            password: password.trim()
        })
    })
    .then(res => {
        if (!res.ok) {
            throw new Error("Invalid login");
        }
        return res.json();
    })
    .then(data => {

        console.log("Response:", data);

        alert("Login Successful Welcome " + data.name);

        localStorage.setItem("userName", data.name);
        localStorage.setItem("userEmail", data.email);

        window.location.href = "dashboard.html";
    })
    .catch(err => {
        console.log(err);
        alert("Invalid email or password");
    });
    
}
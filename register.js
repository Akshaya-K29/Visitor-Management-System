function registerVisitor() {

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const company = document.getElementById("company").value.trim();
    const purpose = document.getElementById("purpose").value;
    const hostName = document.getElementById("hostName").value.trim();
    const hostPhone = document.getElementById("hostPhone").value.trim();

    const photo = document.getElementById("photo").files[0];
    const idProof = document.getElementById("idProof").files[0];

    // Validation
    if (
        name === "" ||
        email === "" ||
        password === "" ||
        mobile === "" ||
        company === "" ||
        purpose === "" ||
        hostName === "" ||
        hostPhone === "" ||
        !photo ||
        !idProof
    ) {
        alert("Please fill all mandatory fields and upload Photo & ID Proof.");
        return;
    }

    const visitor = {
        name: name,
        email: email,
        password: password,
        mobile: mobile,
        company: company,
        purpose: purpose,
        hostName: hostName,
        hostPhone: hostPhone,
        photo: photo.name,
        idProof: idProof.name,
        role: "VISITOR",
        status: "PENDING",
        visitDate: new Date().toISOString().split("T")[0]
    };

    fetch("http://localhost:9099/visitors/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(visitor)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Registration failed");
        }
        return response.json();
    })
    .then(data => {

        console.log(data);

        localStorage.setItem("visitorPass", JSON.stringify(data));

        alert("Visitor Registered Successfully!");

        window.location.href = "qrpass.html";

    })
    .catch(error => {

        console.error(error);

        alert("Registration Failed!");

    });

}
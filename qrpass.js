// Get visitor data from localStorage
const visitor = JSON.parse(localStorage.getItem("visitorPass"));

if (visitor) {

    document.getElementById("id").innerText = visitor.id;
    document.getElementById("name").innerText = visitor.name;
    document.getElementById("email").innerText = visitor.email;
    document.getElementById("company").innerText = visitor.company;
    document.getElementById("host").innerText = visitor.hostName;
    document.getElementById("status").innerText = visitor.status;

    // Generate QR Code
    new QRCode(document.getElementById("qrcode"), {
        text:
            "Visitor ID: " + visitor.id +
            "\nName: " + visitor.name +
            "\nEmail: " + visitor.email +
            "\nCompany: " + visitor.company +
            "\nHost: " + visitor.hostName +
            "\nStatus: " + visitor.status,

        width: 180,
        height: 180
    });

} else {

    alert("No Visitor Data Found!");

    window.location.href = "register.html";

}
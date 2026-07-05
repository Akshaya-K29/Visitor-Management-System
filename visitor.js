const API_URL = "http://localhost:9099/visitors";

window.onload = function () {
    loadVisitors();
};

function loadVisitors() {

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {

            let table = document.getElementById("visitorTable");
            table.innerHTML = "";

            data.forEach(visitor => {

                table.innerHTML += `
                <tr>
                    <td>${visitor.id}</td>
                    <td>${visitor.name}</td>
                    <td>${visitor.email}</td>
                    <td>${visitor.mobile}</td>
                    <td>${visitor.company}</td>
                    <td>${visitor.purpose}</td>
                    <td>${visitor.status}</td>

                    <td>

                        <button class="btn btn-danger btn-sm"
                            onclick="deleteVisitor(${visitor.id})">
                            Delete
                        </button>

                        <button class="btn btn-success btn-sm"
                            onclick="window.location.href='qrpass.html?id=${visitor.id}'">
                            QR Pass
                        </button>

                    </td>

                </tr>
                `;

            });

        })

        .catch(err => console.log(err));

}

function deleteVisitor(id) {

    if (!confirm("Delete this visitor?")) {
        return;
    }

    fetch(`http://localhost:9099/visitors/delete/${id}`, {
        method: "DELETE"
    })

    .then(response => {

        if (!response.ok) {
            throw new Error("Delete failed");
        }

        alert("Visitor Deleted Successfully");

        loadVisitors();

    })

    .catch(error => {

        console.log(error);

        alert("Unable to delete visitor");

    });

}

function searchVisitor() {

    let input = document.getElementById("searchInput").value.toLowerCase();

    let rows = document.querySelectorAll("#visitorTable tr");

    rows.forEach(row => {

        row.style.display =
            row.innerText.toLowerCase().includes(input)
                ? ""
                : "none";

    });

}
const API_URL = "http://localhost:9099/visitors";

window.onload = function () {
    loadPendingVisitors();
};

function loadPendingVisitors() {

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {

            const table = document.getElementById("approvalTable");
            table.innerHTML = "";

            data.forEach(visitor => {

                if (visitor.status === "PENDING") {

                    table.innerHTML += `
                    <tr>

                        <td>${visitor.id}</td>

                        <td>${visitor.name}</td>

                        <td>${visitor.company}</td>

                        <td>${visitor.purpose}</td>

                        <td>${visitor.hostName}</td>

                        <td>${visitor.status}</td>

                        <td>
                            <button class="btn btn-success btn-sm"
                            onclick="approveVisitor(${visitor.id})">
                                Approve
                            </button>
                        </td>

                    </tr>
                    `;

                }

            });

        });

}

function approveVisitor(id) {

    fetch(API_URL + "/approve/" + id, {

        method: "PUT"

    })

    .then(res => {

        if (!res.ok) {

            throw new Error("Approval Failed");

        }

        alert("Visitor Approved");

        loadPendingVisitors();

    })

    .catch(err => {

        console.log(err);

        alert("Unable to approve");

    });

}
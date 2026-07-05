const API_URL = "http://localhost:9099/visitors";

window.onload = function () {
    loadApprovedVisitors();
};

function loadApprovedVisitors() {

    fetch(API_URL)
        .then(res => res.json())
        .then(data => {

            const table = document.getElementById("checkinTable");
            table.innerHTML = "";

            data.forEach(visitor => {

                if (visitor.status === "APPROVED") {

                    table.innerHTML += `
                    <tr>

                        <td>${visitor.id}</td>

                        <td>${visitor.name}</td>

                        <td>${visitor.company}</td>

                        <td>${visitor.hostName}</td>

                        <td>
                            <button class="btn btn-primary btn-sm"
                            onclick="checkIn(${visitor.id})">
                                Check In
                            </button>
                        </td>

                        <td>--</td>

                        <td>${visitor.status}</td>

                        <td>-</td>

                    </tr>
                    `;

                }

            });

        });

}

function checkIn(id) {

    fetch(API_URL + "/checkin/" + id, {

        method: "PUT"

    })

    .then(res => {

        if (!res.ok) {

            throw new Error("Check-In Failed");

        }

        alert("Visitor Checked In");

        loadApprovedVisitors();

    })

    .catch(err => {

        console.log(err);

        alert("Unable to Check In");

    });

}
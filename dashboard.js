// ===============================
// LOAD DASHBOARD DATA
// ===============================

async function loadDashboard() {

    try {


        const response = await fetch(
            "http://localhost:9099/dashboard/stats"
        );


        const data = await response.json();



        console.log(data);



        // ===============================
        // CARDS
        // ===============================


        document.getElementById("totalVisitors").innerText =
            data.totalVisitors || 0;



        document.getElementById("todayVisitors").innerText =
            data.todayVisitors || 0;



        document.getElementById("pendingApprovals").innerText =
            data.pending || 0;



        document.getElementById("checkedIn").innerText =
            data.checkedIn || 0;




        // ===============================
        // TODAY SUMMARY
        // ===============================


        document.getElementById("approvedVisitors").innerText =
            data.checkedIn || 0;


        document.getElementById("pendingVisitors").innerText =
            data.pending || 0;


        document.getElementById("insideVisitors").innerText =
            data.checkedIn || 0;


        document.getElementById("outsideVisitors").innerText =
            data.checkedOut || 0;




        // ===============================
        // RECENT VISITORS TABLE
        // ===============================


        let table = "";


        data.recentVisitors.forEach(visitor => {


            table += `

            <tr>

                <td>${visitor.id}</td>

                <td>${visitor.name}</td>

                <td>${visitor.email}</td>

                <td>${visitor.mobile}</td>

                <td>${visitor.role}</td>

                <td>${visitor.status}</td>


            </tr>

            `;


        });



        document.getElementById("recentVisitors").innerHTML =
            table;





        // ===============================
        // VISITOR ANALYTICS CHART
        // ===============================


        new Chart(
            document.getElementById("visitorChart"),
            {


            type:"bar",


            data:{


                labels:[

                    "Total",
                    "Today",
                    "Pending",
                    "Checked In",
                    "Checked Out"

                ],



                datasets:[{


                    label:"Visitors",



                    data:[


                        data.totalVisitors,

                        data.todayVisitors,

                        data.pending,

                        data.checkedIn,

                        data.checkedOut


                    ]


                }]


            }


        });



    }


    catch(error){


        console.log(
            "Dashboard Error:",
            error
        );


    }


}





// ===============================
// LOAD LOGIN USER DETAILS
// ===============================


document.getElementById("adminName").innerText =

localStorage.getItem("userName") || "Admin";



document.getElementById("userRole").innerText =

localStorage.getItem("userRole") || "";







// ===============================
// LOGOUT
// ===============================


document
.getElementById("logoutBtn")
.onclick = function(){


    localStorage.clear();


    window.location.href="login.html";


};







// ===============================
// START DASHBOARD
// ===============================


loadDashboard();
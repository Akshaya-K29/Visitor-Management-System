let visitors = [];

fetch("http://localhost:9099/dashboard/stats")

.then(response => response.json())

.then(data => {

document.getElementById("totalVisitors").innerHTML = data.totalVisitors;

document.getElementById("pendingVisitors").innerHTML = data.pending;

document.getElementById("checkedInVisitors").innerHTML = data.checkedIn;

document.getElementById("checkedOutVisitors").innerHTML = data.checkedOut;

visitors = data.recentVisitors;

loadTable();

loadChart(data);

})

.catch(error=>console.log(error));



function loadTable(){

let rows="";

visitors.forEach(v=>{

rows+=`

<tr>

<td>${v.id}</td>

<td>${v.name}</td>

<td>${v.email}</td>

<td>${v.mobile}</td>

<td>${v.company || "-"}</td>

<td>${v.purpose || "-"}</td>

<td>${v.status}</td>

</tr>

`;

});

document.getElementById("reportTable").innerHTML=rows;

}



function loadChart(data){

new Chart(document.getElementById("reportChart"),{

type:"bar",

data:{

labels:[

"Total",

"Pending",

"Checked In",

"Checked Out"

],

datasets:[{

label:"Visitors",

data:[

data.totalVisitors,

data.pending,

data.checkedIn,

data.checkedOut

]

}]

}

});

}



function downloadCSV(){

let csv="ID,Name,Email,Mobile,Company,Purpose,Status\n";

visitors.forEach(v=>{

csv+=`${v.id},${v.name},${v.email},${v.mobile},${v.company},${v.purpose},${v.status}\n`;

});

let blob=new Blob([csv],{type:"text/csv"});

let url=window.URL.createObjectURL(blob);

let a=document.createElement("a");

a.href=url;

a.download="Visitor_Report.csv";

a.click();

window.URL.revokeObjectURL(url);

}
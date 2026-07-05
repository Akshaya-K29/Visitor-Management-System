const API="http://localhost:9099/visitors";

window.onload=loadInside;

function loadInside(){

fetch(API)

.then(res=>res.json())

.then(data=>{

let table=document.getElementById("checkoutTable");

table.innerHTML="";

data.filter(v=>v.status==="CHECKED_IN")

.forEach(v=>{

table.innerHTML += `
<tr>

    <td>${v.id}</td>

    <td>${v.name}</td>

    <td>${v.email}</td>

    <td>${v.mobile}</td>

    <td>${v.company}</td>

    <td>${v.status}</td>

    <td>
        <button class="btn btn-danger btn-sm"
        onclick="checkOut(${v.id})">
        Check Out
        </button>
    </td>

</tr>
 
`;

});

});

}

function checkOut(id){

fetch(API+"/checkout/"+id,{

method:"PUT"

})

.then(()=>{

alert("Checked Out");

loadInside();

});

}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


document.getElementById("btn").onclick = fetchUser;

function fetchUser()
{
    var id = document.getElementById("userid").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + id;

    fetch(url)
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);

                var output = document.getElementById("data");
                output.innerText = "Id: " + data.id + "\n" + "Name: "
                        + data.name + "\n" + "Phone: "
                        + data.phone + "\n\n" + "Address: "
                        + "\n" + "Street: " + data.address.street
                        + "\n" + "City: " + data.address.city + "\n"
                        + "Zip: " + data.address.zipcode + "\n"
                        + "Geo (lat,lng): " + data.address.geo.lat
                        + ", " + data.address.geo.lng;
            });
}

document.getElementById("btnAll").onclick = fetchUsers;

function fetchUsers()
{

    fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json()) //in flow1, just do it
            .then(data => {
                // Inside this callback, and only here, the response data is available
                console.log("data", data);

                var getAll = data.map(user => "<tr><td>" + user.name + "</td><td>"
                            + user.phone + "</td></tr>");

                var All = getAll.join("\n");

                var tableHead = "<table class=\"table\">"
                        + "<thead>"
                        + "<tr>"
                        + "<th>Name</th>"
                        + "<th>Phone</th>"
                        + "</tr>"
                        + "</thead>"
                        + "<tbody id=\"table\">"
                        + All
                        + "</tbody>"
                        + "</table>"


                document.getElementById("data").innerHTML = tableHead;
            });
}








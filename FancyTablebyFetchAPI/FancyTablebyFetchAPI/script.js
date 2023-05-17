// async function generateTable(){
//     const table = document.createElement("table");
//     const table_body = document.createElement("tbody");

//     let length = await getDataLength();
//     let width = await getDataIndiLength();
//     for(let i = 0; i < length; i ++){
//         let row;
//         if(i == 0){
//              row = document.createElement("th");
//         }
//         else{
//              row = document.createElement("tr");
//         }
        

//        for(let j = 0; j < width - 1; j ++){
//         let cellText;
//         const cell = document.createElement("td");
//         if(i == 0 && j == 0){
//             cellText = document.createTextNode("Avatar");
//         }
//         else if(i == 0 && j == 1){
//             cellText = document.createTextNode("Email");
//         }
//         else if(i == 0 && j == 2){
//             cellText = document.createTextNode("First Name");
//         }
//         else if(i == 0 && j == 3){
//             cellText = document.createTextNode("Last Name");
//         }

//         else if(i != 0 && j == 0){
//             cellText = document.createElement("img");
//             cellText.src = awaitgetDataAvatars();
//         }

//         else{
//             cellText = document.createTextNode("rest");
//         }

//         cell.appendChild(cellText);
//         row.appendChild(cell);

//        }
//        table_body.appendChild(row);
//     }

//     table.appendChild(table_body);
//     document.body.appendChild(table);

//     table.setAttribute("border" , "1");


// }

// generateTable();



// async function getData(){
//     const response = await fetch("https://reqres.in/api/users");
//     const data = await response.json();
//     console.log(data.data);
   
        
//     }


// async function getDataAvatars(){
//     const response = await fetch("https://reqres.in/api/users");
//     const data = await response.json();
//     for(let i = 0; i < data.data.length; i ++){
//         return data.data[i].avatar;
//     }
// }

// async function getDataLength(){
//     const response = await fetch("https://reqres.in/api/users");
//     const data = await response.json();
//     return data.data.length;
// }

// async function getDataIndiLength(){
//     const response = await fetch("https://reqres.in/api/users");
//     const data = await response.json();
//     return Object.keys(data.data[0]).length;
// }






async function getData() {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    console.log(data);
    let temp_data = "";
    let length = data.data.length;
    for(let i = 0; i < length; i ++){
        temp_data += "<tr>";
        temp_data += `<td><img src = ${data.data[i].avatar}></td>`
        temp_data += "<td>" + data.data[i].email + "</td>";
        temp_data += "<td>" + data.data[i].first_name + "</td>";
        temp_data += "<td>" + data.data[i].last_name + "</td>";
    }

    document.getElementById("data").innerHTML = temp_data;
}

getData();
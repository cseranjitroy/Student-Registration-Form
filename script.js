
function addStudent(){
    let name = document.getElementById("name").value
    let phoneNumber = document.getElementById("phoneNumber").value
    let email = document.getElementById("email").value
    let course = document.getElementById("course").value

    let table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];

    let newRow = table.insertRow(0);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);

    cell1.innerHTML = name;
    cell2.innerHTML = phoneNumber;
    cell3.innerHTML = email;
    cell4.innerHTML = course;
}








//  let name = document.getElementById("name").value
// let rollNumber = document.getElementById("rollNumber").value
// let email = document.getElementById("email").value
// let course = document.getElementById("course").value
// let registration = document.getElementById("registration").value

// registration.addEventListener('click', (e)=>{
//     e.preventDefault()
//     console.log(name);
//     console.log(rollNumber);
//     console.log(email);
//     console.log(course);
// })


//const URL = "https://jsonplaceholder.typicode.com/users/";
const apiUrl = "http://localhost:8080/library/members";
import { sanitizeStringWithTableRows } from "../../utils.js";

export function initUsersModal() {
  document.getElementById("tbl-body").onclick = showUserDetails;
  getAllUsers();
}

export async function getAllUsers() {
  try {
    const usersFromServer = await fetch(apiUrl).then((res) => res.json());
    showAllData(usersFromServer);
  } catch (err) {
    console.error("UPPPPPS: " + err); //This can be done better - do it
  }
}

// create a book
function createBook(book) {
  return fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  }).then((response) => response.json());
}

// get all books
function getAllBooks() {
  return fetch(apiUrl).then((response) => response.json());
}

// get a book by id
function getBookById(id) {
  return fetch(apiUrl + "/" + id).then((response) => response.json());
}

// update a book by id
function updateBookById(id, book) {
  return fetch(apiUrl + "/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  }).then((response) => response.json());
}

// delete a book by id
function deleteBookById(id) {
  return fetch(apiUrl + "/" + id, { method: "DELETE" });
}

function showAllData(data) {
  const tableRowsArray = data.map(
    (member) => `
  <tr>                                
    <td>${member.username} </td>              
    <td>${member.email} </td>                     
    <td>${member.address.street} </td>  
    <td>${member.address.city} </td>
    <td>
    <button id="row-btn_details_${member.id}" type="button"  class="btn btn btn-outline-success" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Details</button> 
    <button id="row-btn_delete_${member.id}" type="button"  class="btn btn btn-outline-danger">Delete</button> 
    </td>      
  </tr>`
  );

  const tableRowsString = tableRowsArray.join("\n");
  document.getElementById("tbl-body").innerHTML =
    sanitizeStringWithTableRows(tableRowsString);
}

async function showUserDetails(evt) {
  const target = evt.target; // får fat på akkurat den id der blev trykket på
  if (!target.id.startsWith("row-btn_")) {
    // Hvis der det blev trykket ikke begynder med row-btn sker det ikke noget
    return;
  }

  const parts = target.id.split("_"); // laver et array og splitter ved _
  // row-btn = 0, details/delete = 1 og id = 2
  const id = parts[2];
  const btnAction = parts[1];
  if (btnAction === "details") {
    // bootstrap 5 modal
    document.querySelector("#exampleModalLabel").innerText =
      "Details for user " + id;

    const user = await fetch(URL + id).then((res) => res.json());

    document.querySelector("#modal-body").innerText = `
    Username: ${user.id}
    Email: ${user.name}
    Loans: 
    
    `;
  } else if (btnAction === "delete") {
    alert("Here you can DELETE user with id: " + id);
    // fetch med delete
  }
}

import { sanitizeStringWithTableRows, handleHttpErrors } from "../../utils.js";

const apiURL = "http://localhost:8080/api";

export function initProducts() {
  document.getElementById("all-products").onclick = fetchProducts;

  //const productList = document.querySelector("#product-list");
}

async function fetchProducts() {
  /*   try {
    const products = await fetch(apiURL + "/products").then(handleHttpErrors);
    const data = await response.json();
    showAllData(products);
  } catch (error) {
    document.getElementById("status").innerText = error.message;
  }
} 
*/ await fetch(apiURL + "/products")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => showAllData(data))
    .catch((error) => {
      document.getElementById("status").innerText = error.message;
    });
}

function showAllData(data) {
  const tableRowsArray = data.map(
    (product) => `
  <tr>                                
    <td>${product.id} </td>              
    <td>${product.name} </td>                     
    <td>${product.price} </td>  
    <td>${product.weight} </td>
    <td>
  
  </tr>`
  );

  const tableRowsString = tableRowsArray.join("\n");

  document.getElementById("product-list").innerHTML =
    sanitizeStringWithTableRows(tableRowsString);
}
/*    <button id="row-btn_details_${product.id}" type="button"  class="btn btn btn-outline-success" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Køb</button> 
    <button id="row-btn_delete_${product.id}" type="button"  class="btn btn btn-outline-danger">Delete</button> 
    </td>    */

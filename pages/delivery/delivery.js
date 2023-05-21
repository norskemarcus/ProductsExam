import { handleHttpErrors, makeOptionsWithToken } from "../../utils.js";

const apiUrl = "http://localhost:8080/api";
const deliveryURL = apiUrl + "/deliveries";

export function initDelivery() {
  // add eventlisteners here
  /*   document
    .getElementById("createDeliveryBtn")
    .addEventListener("click", createDelivery);
  document
    .getElementById("assignProductOrderBtn")
    .addEventListener("click", assignProductOrder);
  document
    .getElementById("saveDeliveryBtn")
    .addEventListener("click", saveDelivery);
  document
    .getElementById("getDeliveryListBtn")
    .addEventListener("click", getDeliveryList);
  document
    .getElementById("findDeliveryBtn")
    .addEventListener("click", findDelivery); */
}
/* 
let delivery = null;
let productOrders = [];

async function createDelivery(delivery) {
  let deliveryName = document.getElementById("deliveryName").value;
  let deliveryWeight = document.getElementById("deliveryWeight").value;
  let deliveryPrice = document.getElementById("deliveryPrice").value;
  delivery = {
    name: deliveryName,
    weight: deliveryWeight,
    price: deliveryPrice,
  };

  updateTotal();

  const options = makeOptionsWithToken("POST", delivery, false);

  return await fetch(deliveryURL, options).then(handleHttpErrors);
}

function assignProductOrder() {
  let productOrderName = document.getElementById("productOrderName").value;
  let productOrderWeight = document.getElementById("productOrderWeight").value;
  let productOrderPrice = document.getElementById("productOrderPrice").value;
  let productOrder = {
    name: productOrderName,
    weight: productOrderWeight,
    price: productOrderPrice,
  };
  productOrders.push(productOrder);
  updateTotal();
}

function updateTotal() {
  let totalPrice = delivery.price;
  let totalWeight = delivery.weight;
  for (let i = 0; i < productOrders.length; i++) {
    totalPrice += productOrders[i].price;
    totalWeight += productOrders[i].weight;
  }
  document.getElementById("totalPrice").innerHTML =
    "Total Price: $" + totalPrice;
  document.getElementById("totalWeight").innerHTML =
    "Total Weight: " + totalWeight;
}
 */
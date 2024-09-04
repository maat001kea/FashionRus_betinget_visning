// // med urlParams kan vi fiske id'et ud af URL'en og vise det rigtige produkt

// const urlParams = new URLSearchParams(window.location.search);
// const id = urlParams.get("id");
// const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

// function getProduct() {
//   fetch(url)
//     .then((res) => res.json())
//     .then(visProdukt);
// }

// function visProdukt(produkt) {
//   document.querySelector(".purchaseBox h3").textContent =
//     produkt.productdisplayname;
//   document.querySelector(
//     "img"
//   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;
//   document.querySelector("img").alt = produkt.productdisplayname;
//   // etc. med de øvrige data
// }

// getProduct();

// fetch("https://kea-alt-del.dk/t7/api/products/1525")
//   .then((response) => response.json())
//   .then((data) => showProduct(data));

// function showProduct(product) {
//   console.log(product);
//   document.querySelector(".purchaseBox h3").textContent =
//     product.productdisplayname;
//   document.querySelector(".purchaseBox .brand").textContent = product.brandname;
//   document.querySelector(
//     "img"
//   ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
// }

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch("https://kea-alt-del.dk/t7/api/products/" + id)
  .then((response) => response.json())
  .then((data) => showProduct(data));

function showProduct(product) {
  console.log(product);
  document.querySelector(".purchaseBox h3").textContent =
    product.productdisplayname;
  document.querySelector(".purchaseBox .brand").textContent = product.brandname;
  document.querySelector(
    "img"
  ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
}

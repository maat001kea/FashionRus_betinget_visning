// Ensure the URL is correct
const categorylist = document.querySelector(".categorylist");
const Params = new URLSearchParams(document.location.search);

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((category) => {
    category.forEach((category) => {
      categorylist.innerHTML += `<a href="productlist.html?category=${category.category}">${category.category}</a>`;
    });
  });

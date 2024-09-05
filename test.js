const categoryList = document.querySelector("#categoryList");
const params = new URLSearchParams(document.location.search);
const category = params.get("category");
let url = undefined;

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    categories.forEach((category) => {
      categoryList.innerHTML += `<li><a href='index.html?category=${category.category}'>${category.category}</a></li>`;
    });
  });

if (params.has("category")) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = "https://kea-alt-del.dk/t7/api/products";
}

const productContainer = document.querySelector("#productDetailsContainer");
const productTemplate = document.querySelector(
  "#productDetailsTemplate"
).content;

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((product) => {
    // console.log("🚀 ~ productDetailsData:", productDetailsData);
    const templateClone = productTemplate.cloneNode(true);
    templateClone.querySelector(".category").textContent = product.category;
    templateClone.querySelector(".price").textContent = product.price;
    templateClone.querySelector(".brand").textContent = product.brandname;
    templateClone.querySelector(".gender").textContent = product.gender;
    templateClone.querySelector(".articletype").textContent =
      product.articletype;
    templateClone.querySelector(".basecolour").textContent = product.basecolour;
    templateClone.querySelector(".season").textContent = product.season;
    templateClone.querySelector(".productionyear").textContent =
      product.productionyear;
    templateClone.querySelector(".usagetype").textContent = product.usagetype;
    templateClone.querySelector(".productdisplayname").textContent =
      product.productdisplayname;

    productContainer.appendChild(templateClone);
  });

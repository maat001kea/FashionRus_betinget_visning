const catURL = "https://kea-alt-del.dk/t7/api/categories";

fetch(catURL)
  .then((res) => res.json())
  .then(bygNav);

function bygNav(data) {
  data.forEach((kategori) => {
    document.querySelector(".categorylist").innerHTML += `<a href=productlist.html?kategori=${kategori.category}>${kategori.category}</a>`;
  });
}

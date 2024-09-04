// Ensure the URL is correct
fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((res) => res.json())
  .then((cats) => {
    console.log("Categories fetched:", cats); // Check if categories are fetched
    showCategories(cats);
  })
  .catch((error) => {
    console.error("Error fetching categories:", error); // Log any errors
  });

function showCategories(cats) {
  cats.forEach(showCategory);
}

function showCategory(cat) {
  // Capture the template
  const template = document.querySelector("template").content;
  if (!template) {
    console.error("Template not found"); // Check if the template exists
    return;
  }

  // Clone the template
  const clone = template.cloneNode(true);

  // Update the content
  clone.querySelector("a").textContent = cat.category;
  clone.querySelector("a").href = `productlist.html?category=${cat.category}`;

  // Append to the DOM
  const letterGroup = document.querySelector(".letterGroup ol");
  if (!letterGroup) {
    console.error("Target element not found");
    return;
  }
  letterGroup.appendChild(clone);
}

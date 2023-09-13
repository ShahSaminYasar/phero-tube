function fetchCategories() {
  fetch("https://openapi.programming-hero.com/api/videos/categories")
    .then((res) => res.json())
    .then((data) => setCategoryButtons(data.data));
}

function setCategoryButtons(categories) {
  categoryButtonsContainer.innerHTML = "";
  categories.forEach((category) => {
    const button = document.createElement("button");
    button.classList.add(
      "category_button",
      "py-1",
      "px-3",
      "bg-neutral-300",
      "text-black",
      "text-base",
      "rounded-md"
    );
    button.textContent = category.category;
    button.addEventListener("click", () => {
      categoryButtons.forEach((catbtn) => {
        catbtn.classList.remove("bg-red-500", "text-white");
      });
      button.classList.add("bg-red-500", "text-white");
      printCategory(category.category_id);
    });
    categoryButtonsContainer.append(button);
  });
  // Get all category buttons to change active state
  const categoryButtons =
    categoryButtonsContainer.querySelectorAll(".category_button");
  // Change the active state of the first (all) button by default
  categoryButtonsContainer
    .querySelector(".category_button")
    .classList.add("bg-red-500", "text-white");
}

// Data for meals
const mealData = {
  breakfast: [
    {
      name: "Scrambled Eggs",
      img: "images/DALL·E 2025-01-15 23.28.40 - A realistic image of freshly made scrambled eggs served on a white plate. The eggs are fluffy and golden, garnished with freshly chopped parsley. The .webp",
    },
    {
      name: "Ruti & mangso",
      img: "/images/DALL·E 2025-01-15 23.34.32 - A realistic image of a traditional Bengali meal featuring freshly made ruti (flatbreads) served with a bowl of spicy mangso (meat curry). The flatbrea.webp",
    },
    {
      name: "Orange Juice",
      img: "images/DALL·E 2025-01-15 23.38.43 - A realistic image of a glass of freshly squeezed orange juice placed on a wooden table. The juice is vibrant and golden, served in a clear glass with .webp",
    },
    {
      name: "Fresh Fruits",
      img: "images/DALL·E 2025-01-15 23.40.42 - A realistic image of a bowl filled with fresh fruits, featuring grapes (angur), ripe mango slices (am), and bananas. The grapes are plump and glisteni.webp",
    },
    {
      name: "Vuna Khichuri",
      img: "images/DALL·E 2025-01-15 23.37.36 - A realistic image of a traditional Bengali vuna khichuri (slow-cooked spiced lentil and rice dish) served on a large brass plate. The khichuri is rich.webp",
    },
  ],
  lunch: [
    {
      name: "Biryani",
      img: "images/DALL·E 2025-01-15 23.41.40 - A realistic image of a traditional plate of biryani, featuring fragrant basmati rice cooked with saffron and spices, layered with tender pieces of chi.webp",
    },
    {
      name: "Chicken Curry",
      img: "images/DALL·E 2025-01-15 23.42.24 - A realistic image of a bowl of chicken curry, featuring tender pieces of chicken cooked in a rich, spicy gravy. The curry is garnished with fresh cori.webp",
    },
    {
      name: "Mixed Vegetables",
      img: "images/DALL·E 2025-01-15 23.56.28 - A realistic image of a bowl of mixed vegetables cooked in a lightly spiced curry. The dish includes vibrant pieces of carrots, green beans, cauliflowe.webp",
    },
    {
      name: "Beef with rice",
      img: "images/DALL·E 2025-01-15 23.59.39 - A realistic image of a plate of beef curry served with steamed white rice. The beef is tender and cooked in a rich, spicy gravy, garnished with fresh .webp",
    },
    {
      name: "Gulab Jamun",
      img: "images/DALL·E 2025-01-15 23.43.19 - A realistic image of a bowl of gulab jamun, featuring soft, golden-brown dumplings soaked in a rich, sugary syrup. The gulab jamuns are garnished with.webp",
    },
  ],
  dinner: [
    {
      name: "Plain Rice",
      img: "images/DALL·E 2025-01-15 23.44.03 - A realistic image of a serving of plain steamed rice, freshly cooked and fluffy, presented on a simple white plate. The rice is pure white, with visib.webp",
    },
    {
      name: "Mutton Curry",
      img: "images/DALL·E 2025-01-15 23.45.19 - A realistic image of a bowl of mutton curry, featuring tender pieces of mutton cooked in a rich and spicy gravy. The curry is garnished with fresh cor.webp",
    },
    {
      name: "Fish Fry",
      img: "images/DALL·E 2025-01-15 23.45.57 - A realistic image of crispy golden fish fry served on a white plate. The fish pieces are perfectly fried, with a crunchy coating and tender, juicy ins.webp",
    },
    {
      name: "Egg",
      img: "images/DALL·E 2025-01-16 00.03.13 - A realistic image of a boiled egg sliced in half, revealing its perfectly cooked yellow yolk, placed on a white plate. The egg is garnished with a spr.webp",
    },
    {
      name: "Rosogolla",
      img: "images/DALL·E 2025-01-16 00.04.08 - A realistic image of traditional Bengali rosogolla, featuring soft, spongy white dumplings soaked in a light sugar syrup. The rosogollas are served in.webp",
    },
  ],
};

// Function to display the selected menu
function showMenu(mealType) {
  const mealDetails = document.getElementById("meal-details");
  const mealTitle = document.getElementById("meal-title");
  const mealItems = document.getElementById("meal-items");

  // Set the title
  mealTitle.textContent =
    mealType.charAt(0).toUpperCase() + mealType.slice(1) + " Menu";

  // Clear previous items
  mealItems.innerHTML = "";

  // Populate items dynamically
  mealData[mealType].forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "meal-item";
    itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
        `;
    mealItems.appendChild(itemDiv);
  });

  // Show the meal details section
  mealDetails.classList.remove("hidden");
}

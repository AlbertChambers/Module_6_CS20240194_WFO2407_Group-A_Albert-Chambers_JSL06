"use strict";
// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [
        {name: "Garlic Bread"},
        {name: "Bruschetta"}
    ],
    MainCourses: [
        {name: "Margherita Pizza"},
        {name: "Spaghetti Carbonara"}],
    Desserts: [
        {name: "Tiramisu"},
        {name: "Cheesecake"}
    ]
};

let total = 0;
let order =[];

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById("menu");

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement("section");
        categoryElement.classList.add("category");

        // Set the text content of the category element to the category name
        const categoryTitle = document.createElement("h3");
        categoryTitle.textContent = category;
        categoryElement.appendChild(categoryTitle);

        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement("ul");
        categoryElement.appendChild(itemList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement("li");

            // Set the text content of the list item element to the item name
            listItem.textContent = item;

            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", () => addToOrder(item));

            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById("odrer-items");
    const orderTotal = document.getElementById("order-total");

    // Create a list item for the order
    const orderItem = document.createElement("li");

    // Set the text content of the list item to the item name
    orderItem.textContent = itemName;

    // Append the list item to the order items list
    orderItemsList.appendChild("orderItem");

    // Update the text content of the order total element with the new total
    total += 50
    orderTotalElement.textContent = total.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);

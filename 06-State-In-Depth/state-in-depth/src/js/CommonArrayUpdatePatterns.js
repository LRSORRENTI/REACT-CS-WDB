// ==============================
// Common Array Updating Patterns 
// ==============================

// COMMON PATTERNS FOR UPDATING ARRAYS IN STATE:

const shoppingCart = [
    { id: 1, product: "HDMI Cable", price: 4 },
    { id: 2, product: "Cinnamon", price: 2 },
    { id: 3, product: "Pumpkin Pie", price: 6.5 }
];

// ADDING TO AN ARRAY: 

[...shoppingCart, { id: 4, product: "Coffee Mug", price: 5}];

// We make a copy of the original using spread first!

// REMOVING AN ELEMENT: 

shoppingCart.filter((item) => item.id !== 2)

// Again using a method to copy the original array 

// UPDATING ALL ELEMENTS IN AN ARRAY

shoppingCart.map((item) => {
    return {
        ...item, 
        product: item.product.toLowerCase(),
    };
});
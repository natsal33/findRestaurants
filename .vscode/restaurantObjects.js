

const bothellRestaurants = {};

function CreateRestaurant(name, foodGenre, menuItems, milesAway) {
    return {
        name,
        foodGenre,
        menuItems,
        milesAway
    }
}

bothellRestaurants.theBison = CreateRestaurant("The Bison on Main", 
    "American", 
    ["Bison Burger, Buffalo Bill Burger, Beef Brisket Sandwich"], 
    0.2);

bothellRestaurants.amaro = CreateRestaurant("Amaro Bistro", 
    "Italian", 
    ["Gnocchi Pasta", "Lasagne Pasta", "Cesare Salad"], 
    0.3);
bothellRestaurants.chantanee = CreateRestaurant("Chantanee Thai", 
    "Thai", 
    ["Thai Seafood Salad", "Pad Thai", "Coconut Curry"], 
    0.1);
bothellRestaurants.bine = CreateRestaurant("The Bine", 
    "American", 
    ["Mac & Cheese", "Truffle Popcorn", "Beer"], 
    0.1);
bothellRestaurants.poquitos = CreateRestaurant("Poquitos Bothell", 
    "Mexican", 
    ["Chopped Salad", "Baja Fish", "Enchilada Roja"], 
    0.1);
bothellRestaurants.stack571 = CreateRestaurant("Stack 571 Bothell", 
    "American", 
    ["Kale Ceasar Salad", "Jimmy Burger", "Blackened Salmon Sandwich"],
    0.3);



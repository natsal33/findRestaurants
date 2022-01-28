const prompt = require('prompt-sync')();
const bothellRestaurants = [];


function CreateRestaurant(name, foodGenre, menuItems, milesAway) {
    return {
        name,
        foodGenre,
        menuItems,
        milesAway
    }
}

bothellRestaurants.push(CreateRestaurant("The Bison on Main", 
    "American", 
    ["Bison Burger, Buffalo Bill Burger, Beef Brisket Sandwich"], 
    0.2))

bothellRestaurants.push( CreateRestaurant("Amaro Bistro", 
    "Italian", 
    ["Gnocchi Pasta", "Lasagne Pasta", "Cesare Salad"], 
    0.3))

bothellRestaurants.push(CreateRestaurant("Chantanee Thai", 
    "Thai", 
    ["Thai Seafood Salad", "Pad Thai", "Coconut Curry"], 
    0.1))

bothellRestaurants.push(CreateRestaurant("The Bine", 
    "American", 
    ["Mac & Cheese", "Truffle Popcorn", "Beer"], 
    0.1))

bothellRestaurants.push(CreateRestaurant("Poquitos Bothell", 
    "Mexican", 
    ["Chopped Salad", "Baja Fish", "Enchilada Roja"], 
    0.1))

bothellRestaurants.push(CreateRestaurant("Stack 571 Bothell", 
    "American", 
    ["Kale Ceasar Salad", "Jimmy Burger", "Blackened Salmon Sandwich"],
    0.3))


console.log(bothellRestaurants);

function findFoodMatch(entryType, entry) {
    switch(entryType) {
        case "Name":
            for(restaurant of bothellRestaurants){
                if(restaurant.name === entry) {
                    return restaurant;
                } else {
                    continue;
                }
            }
        
        case "Food Genre":
            for(restaurant of bothellRestaurants){
                if(restaurant.foodGenre === entry) {
                    return restaurant;
                } else {
                    continue;
                }
            }
            break;
        
        case "Dish Type":
            for(restaurant of bothellRestaurants){
                if(restaurant.name === entry) {
                    return restaurant;
                } else {
                    continue;
                }
            }
            break;

        case "Distance":
            let nearbyRestaurants = [];
            for(restaurant of bothellRestaurants){
                if(restaurant.milesAway <= entry) {
                    nearbyRestaurants.push(restaurant);
                } else {
                    continue;
                }
            }
            return nearbyRestaurants;
            break;
        

    }
}



const input = prompt('What are you feeling food-wise?');
// console.log(`Input ${input}`);



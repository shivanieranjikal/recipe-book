import { recipeinterface } from "./models/recipeinterface";

export const recipedata: recipeinterface[] = [
    {
        id: 1,
        name: "Chicken Biryani",
        description: "This stunning and warming chicken biryani with creamy coriander and mint sauce recipe is a fabulous dinner idea to serve to the whole family during the winter months.",
        image: "https://geekrobocook.com/wp-content/uploads/2021/03/Tandoori-chicken-biryani.jpg",
        ingredients: [
            {
                id: 1,
                name: "Chicken",
                units: "gm",
                quantity: 1000,
                price: 0.2
            },
            {
                id: 2,
                name: "Rice",
                units: "gm",
                quantity: 500,
                price: 0.06
            },
            {
                id: 3,
                name: "Masala",
                units: "gm",
                quantity: 100,
                price: 0.06
            },
            {
                id: 4,
                name: "Tomato",
                units: "gm",
                quantity: 200,
                price: 0.06
            }
        ]
    },
    {
        id: 2,
        name: "Egg Noodles",
        description: "This easy Tea Eggs recipe served with Asian noodles is a wonderful dish to celebrate Chinese New Year. Plus these tea eggs make for a show stopping dish to serve at your next dinner party.",
        image: "https://media.nbclosangeles.com/2020/10/5003337360-1080pnbcstations.jpg?quality=85&strip=all",
        ingredients: [
            {
                id: 5,
                name: "Egg",
                units: "gm",
                quantity: 400,
                price: 0.1
            },
            {
                id: 6,
                name: "Noodles",
                units: "gm",
                quantity: 500,
                price: 0.1
            },
            {
                id: 7,
                name: "Dark Soy",
                units: "gm",
                quantity: 500,
                price: 0.1
            },
            {
                id: 8,
                name: "Vinegar",
                units: "gm",
                quantity: 500,
                price: 0.1
            }
        ]
    },
    {
        id: 3,
        name: "Momos",
        description: "Momos, a steamed or fried dumpling stuffed with mixed vegetables, is a delicious snack food enjoyed in Tibet region. Momos are getting very popular in other parts of India and you can easily prepare them at home.",
        image: "https://www.foodieist.com/wp-content/uploads/2020/12/veg-momos-recipe-672x372.jpg",
        ingredients: [
            {
                id: 9,
                name: "Steamed Chicken",
                units: "gm",
                quantity: 1000,
                price: 0.2
            },
            {
                id: 10,
                name: "Flour",
                units: "gm",
                quantity: 300,
                price: 0.06
            },
            {
                id: 11,
                name: "Soya sauce",
                units: "gm",
                quantity: 500,
                price: 0.1
            },
            {
                id: 12,
                name: "Baking powder",
                units: "gm",
                quantity: 500,
                price: 0.1
            }
        ]
    },
    {
        id: 4,
        name: "Butter Garlic Prawn",
        description: "This BBQ seafood platter with lemon and garlic butter would be a welcome sight at any Australian Christmas. Try this recipe with your favourite seafood.",
        image: "http://www.flavorsofmumbai.com/wp-content/uploads/2011/06/buttery-Butter-Garlic-Prawns-1280x720.jpg",
        ingredients: [
            {
                id: 7,
                name: "Prawns",
                units: "gm",
                quantity: 1000,
                price: 0.4
            },
            {
                id: 8,
                name: "Butter",
                units: "gm",
                quantity: 200,
                price: 0.75
            },
            {
                id: 11,
                name: "Lemon",
                units: "gm",
                quantity: 500,
                price: 0.1
            },
            {
                id: 12,
                name: "Pepper",
                units: "gm",
                quantity: 500,
                price: 0.1
            }
        ]
    }
];
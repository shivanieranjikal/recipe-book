import { recipeinterface } from "./models/recipeinterface";

export const recipedata: recipeinterface[] = [
    {
        id: 1,
        name: "Chicken Biryani",
        description: "One Pot Chicken Biryani recipe!",
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
            }
        ]
    },
    {
        id: 2,
        name: "Chicken Noodles",
        description: "Check out the recipe for noodles!",
        image: "https://hellskitchenrecipes.com/wp-content/uploads/2020/01/Chicken-Stir-Fry-with-Rice-Noodles.png",
        ingredients: [
            {
                id: 3,
                name: "Chicken",
                units: "gm",
                quantity: 1000,
                price: 0.2
            },
            {
                id: 4,
                name: "Noodles",
                units: "gm",
                quantity: 500,
                price: 0.1
            }
        ]
    },
    {
        id: 3,
        name: "Momo",
        description: "Check out the recipe for momos!",
        image: "https://www.foodieist.com/wp-content/uploads/2020/12/veg-momos-recipe-672x372.jpg",
        ingredients: [
            {
                id: 5,
                name: "Chicken",
                units: "gm",
                quantity: 1000,
                price: 0.2
            },
            {
                id: 6,
                name: "Flour",
                units: "gm",
                quantity: 300,
                price: 0.07
            }
        ]
    },
    {
        id: 4,
        name: "Butter Garlic Prawn",
        description: "Check out the recipe for prawns!",
        image: "https://manzaii.com/assets/img/items/1609839749Rst6gUTOUm.jpg",
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
            }
        ]
    }
];
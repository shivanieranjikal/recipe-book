import { Ingredient } from "./ingredient";

export interface recipeinterface {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients: Ingredient[];
  }
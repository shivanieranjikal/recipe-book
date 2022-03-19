import { Injectable } from '@angular/core';
import { Ingredient } from './models/ingredient';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
ingredientList: Ingredient[] = []
  constructor() { }

  getIngredientList() : Ingredient[]{
    return this.ingredientList;
  }

  addIngredients(singleIngredient: Ingredient) : void {
    this.ingredientList.push(singleIngredient)
  }
}


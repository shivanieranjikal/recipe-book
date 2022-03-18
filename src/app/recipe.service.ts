import { Injectable } from '@angular/core';
import { recipeinterface } from './models/recipeinterface';
import { recipedata } from './recipedata';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): recipeinterface[] {
    return recipedata;
  }

}

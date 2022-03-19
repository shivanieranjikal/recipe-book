import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { recipeinterface } from '../models/recipeinterface';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe?: recipeinterface;
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  addToCart(singleIngredient: Ingredient): void{
    this.shoppingService.addIngredients(singleIngredient);
  }
}

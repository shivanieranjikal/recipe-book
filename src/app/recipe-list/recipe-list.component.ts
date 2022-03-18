import { Component, OnInit } from '@angular/core';
import { recipeinterface } from '../models/recipeinterface';
import { RecipeService } from '../recipe.service';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 
  selecteditem!: recipeinterface;
  data: recipeinterface[] = [];

  constructor(private recipeService: RecipeService ) {}
  ngOnInit(): void {
  
    this.getData()
  }

  onSelect(data: recipeinterface) {
    this.selecteditem = data;
  }

  getData():void {
    this.data=this.recipeService.getRecipes();
  }
}

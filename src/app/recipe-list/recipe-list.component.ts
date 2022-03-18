import { Component, OnInit } from '@angular/core';
import { recipeinterface } from '../models/recipeinterface';
import { recipedata } from '../recipedata';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  data = recipedata;
  selecteditem!: recipeinterface;


  constructor() { }

  ngOnInit(): void {
  }

  onSelect(data: recipeinterface) {
    this.selecteditem = data;
  }
}

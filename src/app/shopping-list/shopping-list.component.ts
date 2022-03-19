import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
list: Ingredient[] = []
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.list=this.shoppingService.getIngredientList();
  }

}

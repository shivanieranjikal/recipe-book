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

  calculateTotal(): number{
    let sum=0;
    for(let index=0;index<this.list.length;index++)
    {
      sum=sum+(this.list[index].quantity*this.list[index].price);
    }
    return sum;
  }

  removeFromCart(ingredient: Ingredient): void{
    this.list=this.list.filter(item=>item.id!==ingredient.id);
    this.shoppingService.ingredientList=this.list;
  }
  
}

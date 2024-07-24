import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  shoppinglistService = inject(ShoppingListService);

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getAllIngredient();

    this.igChangeSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  editIngredient(index: number) {
    this.shoppinglistService.editIngredientId.next(index);
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}

import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  editIngredientId = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Ingredient Test 1', 100),
    new Ingredient('Ingredient Test 2', 200),
    new Ingredient('Ingredient Test 3', 300),
    new Ingredient('Ingredient Test 4', 400),
  ];

  constructor() {}

  getAllIngredient() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  addIngredient(name: string, amount: number) {
    const newIngredient = new Ingredient(name, amount);

    this.ingredients.push(newIngredient);

    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, updatedIngredient: Ingredient) {
    this.ingredients[index] = updatedIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(ingredientToEditIndex: number) {
    this.ingredients.splice(ingredientToEditIndex, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

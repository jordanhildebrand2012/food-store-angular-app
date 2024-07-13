import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  updateIngredient = new EventEmitter<Ingredient[]>();

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

  addIngredient(name: string, amount: number) {
    const newIngredient = new Ingredient(name, amount);

    this.ingredients.push(newIngredient);

    this.updateIngredient.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.updateIngredient.emit(this.ingredients.slice());
  }
}

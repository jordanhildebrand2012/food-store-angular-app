import { Component, inject, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent {
  @Input() selectedRecipe: Recipe;

  shoppingListService = inject(ShoppingListService);

  onAddIngredientsToShoppingList() {
    const ingredients: Ingredient[] = this.selectedRecipe.ingredients.map(
      (ingredient) => new Ingredient(ingredient.name, ingredient.amount)
    );
    this.shoppingListService.addIngredients(ingredients);
  }
}

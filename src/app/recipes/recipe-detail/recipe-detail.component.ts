import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;

  shoppingListService = inject(ShoppingListService);
  recipeService = inject(RecipeService);
  route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.selectedRecipe = this.recipeService.getRecipe(+params['id']);
    });
  }

  onAddIngredientsToShoppingList() {
    const ingredients: Ingredient[] = this.selectedRecipe.ingredients.map(
      (ingredient) => new Ingredient(ingredient.name, ingredient.amount)
    );
    this.shoppingListService.addIngredients(ingredients);
  }
}

import { Component, inject, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  id: number;

  shoppingListService = inject(ShoppingListService);
  recipeService = inject(RecipeService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.selectedRecipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddIngredientsToShoppingList() {
    const ingredients: Ingredient[] = this.selectedRecipe.ingredients.map(
      (ingredient) => new Ingredient(ingredient.name, ingredient.amount)
    );
    this.shoppingListService.addIngredients(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate['/recipes'];
  }
}

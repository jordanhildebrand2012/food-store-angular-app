import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg'
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg'
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg'
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg'
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}

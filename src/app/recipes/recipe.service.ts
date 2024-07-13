import { EventEmitter, inject, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://myfoodbook.com.au/sites/default/files/styles/card_c_xw_wp/public/recipe_photo/Sri-Lankin-coconut-%26-cashew-chicken_2412.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
  ];

  constructor() {}

  getRecipes() {
    return this.recipes.slice();
  }
}

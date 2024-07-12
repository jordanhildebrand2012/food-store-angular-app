import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
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
}

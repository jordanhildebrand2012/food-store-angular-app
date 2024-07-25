import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test Name',
      'Test Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/courgette-lemon-risotto-fe5a759.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/2022-09-23GFOWEBFamilyRecipes-OnePotGarlicChicken05875preview-d8a4a42.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-10667_10-25322f0.jpg',
      [
        new Ingredient('Ingredient Test 1', 100),
        new Ingredient('Ingredient Test 2', 200),
        new Ingredient('Ingredient Test 3', 300),
      ]
    ),
    new Recipe(
      'Test Name',
      'Test Description',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-8325_12-5a7d66c.jpg',
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

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}

import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrl: './recipe-edit.component.css',
})
export class RecipeEditComponent implements OnInit {
  editMode = false;
  id: number;
  recipeForm: FormGroup;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private recipeService = inject(RecipeService);

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
    });

    this.initForm();
  }

  get controls() {
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  initForm() {
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.id);

      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[0-9]+[1-9]*$/),
              ]),
            })
          );
        }
      }

      this.recipeForm = new FormGroup({
        name: new FormControl(recipe.name, Validators.required),
        imagePath: new FormControl(recipe.imagePath, Validators.required),
        description: new FormControl(recipe.description, Validators.required),
        ingredients: recipeIngredients,
      });
    } else {
      this.recipeForm = new FormGroup({
        name: new FormControl(null, Validators.required),
        imagePath: new FormControl(null, Validators.required),
        description: new FormControl(null, Validators.required),
        ingredients: new FormArray([
          new FormGroup({
            name: new FormControl(null, Validators.required),
            amount: new FormControl(null, [
              Validators.required,
              Validators.pattern(/^[0-9]+[1-9]*$/),
            ]),
          }),
        ]),
      });
    }
  }

  onSubmit() {
    const newIngredient = new Recipe(
      this.recipeForm.value.name,
      this.recipeForm.value.description,
      this.recipeForm.value.imagePath,
      this.recipeForm.value.ingredients
    );

    if (!this.editMode) {
      this.recipeService.addRecipe(newIngredient);
    } else {
      this.recipeService.updateRecipe(this.id, newIngredient);
    }
    this.onCancel();
  }

  onAddIngredientCtrl() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}

import {
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('form') ingredientForm: NgForm;
  editMode = false;
  ingredientToEditIndex: number;
  ingredientToEdit: Ingredient;

  shoppingListService = inject(ShoppingListService);

  ngOnInit(): void {
    this.shoppingListService.editIngredientId.subscribe((index: number) => {
      this.ingredientToEditIndex = index;
      this.editMode = true;
      this.ingredientToEdit = this.shoppingListService.getIngredient(index);

      this.ingredientForm.setValue({
        nameInput: this.ingredientToEdit.name,
        amountInput: this.ingredientToEdit.amount,
      });
    });
  }

  onSubmit(ingredientForm: NgForm) {
    if (!this.editMode) {
      this.shoppingListService.addIngredient(
        ingredientForm.value.nameInput,
        ingredientForm.value.amountInput
      );
    } else {
      const newIngredient = new Ingredient(
        ingredientForm.value.nameInput,
        ingredientForm.value.amountInput
      );
      this.shoppingListService.updateIngredient(
        this.ingredientToEditIndex,
        newIngredient
      );
    }
    this.editMode = false;
    ingredientForm.reset();
  }

  onDelete() {
    this.onClear();
    this.shoppingListService.deleteIngredient(this.ingredientToEditIndex);
  }

  onClear() {
    this.ingredientForm.reset();
    this.editMode = false;
  }
}

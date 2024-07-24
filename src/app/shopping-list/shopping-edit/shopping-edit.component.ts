import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  shoppingIngredientService = inject(ShoppingListService);

  onAdd(ingredientForm: NgForm) {
    this.shoppingIngredientService.addIngredient(
      ingredientForm.value.nameInput,
      ingredientForm.value.amountInput
    );
  }
}

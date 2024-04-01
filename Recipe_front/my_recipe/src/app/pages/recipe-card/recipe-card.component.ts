import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { UpdateRecipeFormComponent } from '../update-recipe-form/update-recipe-form.component';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { DeleteConformationComponent, DeleteConfirmationData } from '../../dialog/delete-conformation/delete-conformation.component';
@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DeleteConformationComponent
  ],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {

  @Input() recipe: any
  @Input() toggle: any

  constructor(public dialog: MatDialog, private recipeService: RecipeServiceService) {

  }

  onDeleteClick() {
    const confirmationData: DeleteConfirmationData = {
      message: 'Are you sure you want to delete this item?',
      title: ''
    };

    const dialogRef = this.dialog.open(DeleteConformationComponent, {
      width: '250px', // Optional: Set dialog width
      data: confirmationData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.recipeService.deleteRecipe(this.recipe.id).subscribe(
          (data: any) => console.log("data deleted successfully", data),
          (error) => console.log("error", error)
        )
        console.log('Item deleted!');
      } else {
        console.log('Deletion cancelled.');
      }
    });
  }  



    // handleDeleteRecipe() {
    //   this.recipeService.deleteRecipe(this.recipe.id).subscribe()
    // }

    handleOpenEditRecipeForm() {
      this.dialog.open(UpdateRecipeFormComponent,
        {
          data: this.recipe,
        })
    }
}


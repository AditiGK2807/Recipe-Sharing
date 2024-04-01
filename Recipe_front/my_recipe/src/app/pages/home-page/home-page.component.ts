import { Component } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeFormComponent } from '../create-recipe-form/create-recipe-form.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { state } from '@angular/animations';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RecipeCardComponent,
    MatIconModule,
    MatButtonModule

  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  recipe = []

  constructor(public dilog: MatDialog, 
    public authService: AuthServiceService,
    private recipeService: RecipeServiceService
    ) { }

  handleopenCreateRecipeForm() {
    this.dilog.open(CreateRecipeFormComponent)
  }

  ngOnInit(){
    this.authService.getUserProfile();
    this.recipeService.getRecipe().subscribe()
    this.recipeService.recipeSubject.subscribe(
      (state)=>{
        console.log("state ", state)
        this.recipe=state.recipes
      }
    )
  }

}

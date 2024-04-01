import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { Router } from '@angular/router';
import { routes } from '../../app.routes';
import { LogoutConfirmationComponent, LogoutConfirmationData } from '../../dialog/logout-confirmation/logout-confirmation.component';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  user: any = null

  constructor(public authService: AuthServiceService, private router: Router, public dialog: MatDialog, private recipeService: RecipeServiceService) { }

  ngOnInit() {
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state", auth)
        this.user = auth.user
      }
    )
  }


  onLogoutClick() {
    const confirmationData: LogoutConfirmationData = {
      message: 'Are you sure you want to Logout',
      title: ''
    };

    const dialogRef = this.dialog.open(LogoutConfirmationComponent, {
      width: '250px', // Optional: Set dialog width
      data: confirmationData
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.authService.logout()
        console.log('Item deleted!');
      } else {
        console.log('Deletion cancelled.');
      }
    });
  }

  // handleLogout() {
  //   this.authService.logout()
  //   // this.router.navigate("/")
  // }

}

import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
 
export interface LogoutConfirmationData {
  title: string; // Optional title for the dialog
  message: string; // The confirmation message
}
@Component({
  selector: 'app-logout-confirmation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './logout-confirmation.component.html',
  styleUrl: './logout-confirmation.component.scss'
})
export class LogoutConfirmationComponent {

  constructor(
    public dialogRef: MatDialogRef<LogoutConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LogoutConfirmationData
  ) {}
 
  onConfirmClick(): void {
    this.dialogRef.close(true); // Pass true on confirmation
  }
 
  onCloseClick(): void {
    this.dialogRef.close(false); // Pass false on cancellation
  }


}

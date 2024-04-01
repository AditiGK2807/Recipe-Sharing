import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
 
export interface DeleteConfirmationData {
  title: string; // Optional title for the dialog
  message: string; // The confirmation message
}
@Component({
  selector: 'app-delete-conformation',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-conformation.component.html',
  styleUrl: './delete-conformation.component.scss',
})
export class DeleteConformationComponent {

  constructor(
    public dialogRef: MatDialogRef<DeleteConformationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteConfirmationData
  ) {}
 
  onConfirmClick(): void {
    this.dialogRef.close(true); // Pass true on confirmation
  }
 
  onCloseClick(): void {
    this.dialogRef.close(false); // Pass false on cancellation
  }

}

import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ProjectModalComponent } from './project-modal/project-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  dialogConfig = new MatDialogConfig();
  modalDialog: MatDialogRef<ProjectModalComponent, any> | undefined;

  constructor(public matDialog: MatDialog) {}

  ngAfterViewInit(): void {
    document.onclick = (args: any) => {
      if (args.target.tagName === 'BODY') {
        this.modalDialog?.close();
      }
    }
  }

  openModal() {
    this.dialogConfig.id = 'project-modal-component';
    this.dialogConfig.height = '500px';
    this.dialogConfig.width = '650px';
    this.modalDialog = this.matDialog.open(ProjectModalComponent, this.dialogConfig);
  }
}

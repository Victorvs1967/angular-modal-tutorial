import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

const MATERIAL_UI_COMPONENT = [
  MatButtonModule,
  MatDialogModule,
];

@NgModule({
  imports: [ ...MATERIAL_UI_COMPONENT ],
  exports: [ ...MATERIAL_UI_COMPONENT ],
})
export class MaterialUiModule { }

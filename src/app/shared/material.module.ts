import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule, 
  MatCheckboxModule, 
  MatToolbarModule, 
  MatCardModule,
  MatRadioModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule
  ],
  declarations: []
})

export class MaterialModule { }

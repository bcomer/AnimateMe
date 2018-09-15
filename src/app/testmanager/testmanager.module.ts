import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestmanagerRoutingModule } from './testmanager-routing.module';
import { TestComponent } from './test/test.component';
import { MaterialModule } from '../shared/material.module';
import { QuestionComponent } from './question/question.component';

@NgModule({
  imports: [
    CommonModule,
    TestmanagerRoutingModule,
    MaterialModule
  ],
  declarations: [TestComponent, QuestionComponent]
})
export class TestmanagerModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: TestComponent, 
    children: [
      { path: '', component: QuestionComponent}
    ]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestmanagerRoutingModule { }

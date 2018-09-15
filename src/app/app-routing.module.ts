import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'testmanager', loadChildren: './testmanager/testmanager.module#TestmanagerModule' },  
  { path: '**', redirectTo: 'testmanager' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

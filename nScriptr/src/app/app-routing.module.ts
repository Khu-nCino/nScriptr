import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopupComponent } from './popup/popup.component';
import { ScriptDetailComponent } from './script-detail/script-detail.component';


const routes: Routes = [
  { path: 'search', component: PopupComponent },
  { path: 'script/:id', component: ScriptDetailComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: '**', component: PopupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

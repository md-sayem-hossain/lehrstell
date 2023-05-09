import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { BerufsGeneratorComponent } from './berufs-generator.component'; 
 
const routes: Routes = [
  { path: '', component: BerufsGeneratorComponent },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BerufsRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './shared/header/header.component';
import {AboutusComponent} from './shared/aboutus/aboutus.component';
import {FooterComponent} from './shared/footer/footer.component';


const routes: Routes = [
  {path:'',redirectTo:'/aboutus',pathMatch:'full'},
  {path:'aboutus',component:AboutusComponent},
  {path:'header',component:HeaderComponent},
  {path:'footer',component:FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

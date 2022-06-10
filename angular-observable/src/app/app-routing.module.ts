import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ServerComponent } from './server/server.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path: '', component: HomeComponent},                           // http://localhost:4200
  {path: 'user/:id', component: UserComponent},                   // http://localhost:4200/user/3
  {path: 'product', component: ProductComponent},                 // http://localhost:4200/product
  {path: 'server', component: ServerComponent}                    // http://localhost:4200/server
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

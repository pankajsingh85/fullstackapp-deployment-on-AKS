import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AdminProductViewComponent } from './components/admin-product-view/admin-product-view.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminServiceViewComponent } from './components/admin-service-view/admin-service-view.component';
import { AddServiceabilityComponent } from './components/add-serviceability/add-serviceability.component';
import { EditServiceabilityComponent } from './components/edit-serviceability/edit-serviceability.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginUserComponent},
  {path:'register',component:RegisterUserComponent},
  { path: 'details/:productCode', component:ProductDetailsComponent,canActivate:[AuthGuard] },

  {path:'loginAdmin',component:LoginAdminComponent},
  {path:'adminHome',component:AdminHomeComponent},
  {path:'adminHome/view',component:AdminProductViewComponent},
  {path:'adminHome/add',component:AddProductComponent},
  {path:'adminHome/edit/:productCode',component:EditProductComponent},

  {path:'adminHome/view2',component:AdminServiceViewComponent},
  {path:'adminHome/add2',component:AddServiceabilityComponent},
  {path:'adminHome/edit2/:id',component:EditServiceabilityComponent}




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

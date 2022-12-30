import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { DatePipe } from '@angular/common';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AdminProductViewComponent } from './components/admin-product-view/admin-product-view.component';
import { AdminServiceViewComponent } from './components/admin-service-view/admin-service-view.component';
import { AddServiceabilityComponent } from './components/add-serviceability/add-serviceability.component';
import { EditServiceabilityComponent } from './components/edit-serviceability/edit-serviceability.component';




@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    LoginUserComponent,
    HomeComponent,
    ProductDetailsComponent,
    LoginAdminComponent,
    AdminHomeComponent,
    AddProductComponent,
    EditProductComponent,
    AdminProductViewComponent,
    AdminServiceViewComponent,
    AddServiceabilityComponent,
    EditServiceabilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
   // HttpClient,
   HttpClientModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { FilterPipe } from './filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserHomeHeaderComponent } from './userhome/user-home-header/user-home-header.component';
import { ComposeComponent } from './userhome/compose/compose.component';
import { InboxComponent } from './userhome/inbox/inbox.component';
import { SentComponent } from './userhome/sent/sent.component';
import { TrashComponent } from './userhome/trash/trash.component';
import { DraftComponent } from './userhome/draft/draft.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    FilterPipe,
    AddProductComponent,
    ViewProductComponent,
  
    RegisterComponent,
    ForgotPasswordComponent,
    UserhomeComponent,
    UserHomeHeaderComponent,
    ComposeComponent,
    InboxComponent,
    SentComponent,
    TrashComponent,
    DraftComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';

import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PropertyBindingComponent } from './data-binding/property-binding/property-binding.component';
import { EventBindingComponent } from './data-binding/event-binding/event-binding.component';
import { TwoWayBindingComponent } from './data-binding/two-way-binding/two-way-binding.component';
import { from } from 'rxjs';
import { DirectivesComponent } from './directives/directives.component';
import { StructuralDirectiveComponent } from './directives/structural-directive/structural-directive.component';
import { NgIfComponent } from './directives/structural-directive/ng-if/ng-if.component';
import { NgForComponent } from './directives/structural-directive/ng-for/ng-for.component';
import { NgSwitchComponent } from './directives/structural-directive/ng-switch/ng-switch.component';
import { CustomDirective } from './custom.directive';
import { RegisterComponent } from './register/register.component';
import { AddrequirementComponent } from './assignment/addrequirement/addrequirement.component';
import { AddcandidateComponent } from './assignment/addcandidate/addcandidate.component';
import { AdduserComponent } from './assignment/adduser/adduser.component';
import { AddproductComponent } from './assignment/addproduct/addproduct.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CommentComponent } from './comment/comment.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { DollarPipe } from './dollar.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    HelpComponent,
    LoginComponent,
    FooterComponent,
    DataBindingComponent,
    PropertyBindingComponent,
    EventBindingComponent,
    TwoWayBindingComponent,
    DirectivesComponent,
    StructuralDirectiveComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    CustomDirective,
    RegisterComponent,
    AddrequirementComponent,
    AddcandidateComponent,
    AdduserComponent,
    AddproductComponent,
    ReactiveFormComponent,
    ParentComponent,
    ChildComponent,
    CommentComponent,
    CommentDetailsComponent,
    DollarPipe
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : '' , component : HomeComponent},
      {path : 'about' , component : AboutComponent},
      {path : 'help' , component : HelpComponent},
      {path : 'login' , component : LoginComponent},
      {path : 'property-binding' , component : PropertyBindingComponent},
      {path : 'event-binding' , component : EventBindingComponent},
      {path : 'two-way' , component: TwoWayBindingComponent},
      {path : 'ng-if' , component : NgIfComponent},
      {path : 'ng-for' , component : NgForComponent},
      {path : 'ng-switch', component : NgSwitchComponent},
      {path :  'register' , component : RegisterComponent},
      {path : 'add-requirement' , component : AddrequirementComponent},
      {path : 'add-candidate' , component : AddcandidateComponent},
      {path : 'add-user' , component : AdduserComponent},
      {path : 'add-product' , component : AddproductComponent},
      {path : 'reactive-form' , component : ReactiveFormComponent},
      {path : 'parent' , component : ParentComponent},
      {path : 'comment-details' , component : CommentDetailsComponent}



    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ComposeComponent } from './userhome/compose/compose.component';
import { InboxComponent } from './userhome/inbox/inbox.component';
import { SentComponent } from './userhome/sent/sent.component';
import { TrashComponent } from './userhome/trash/trash.component';
import { DraftComponent } from './userhome/draft/draft.component';




const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  
  {
    path: 'changepassword', component: ForgotPasswordComponent
  },
  {
    path: 'userhome', component: UserhomeComponent
  },
  {
    path:'compose',component:ComposeComponent
  },
  {
    path:'inbox',component:InboxComponent
  },
  {
    path:'sent',component:SentComponent
  },
  {
    path:'trash',component:TrashComponent
  },
  {
    path:'draft',component:DraftComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

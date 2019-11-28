import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TechelevateComponent } from './techelevate/techelevate.component';
import { RouterModule } from '@angular/router';
import { ParentcarsComponent } from './parentcars/parentcars.component';
import { ChildcarsComponent } from './childcars/childcars.component';
import { ChildbikesComponent } from './childbikes/childbikes.component';
import { ParentbikesComponent } from './parentbikes/parentbikes.component';
import { ParentmoviesComponent } from './parentmovies/parentmovies.component';
import { ChildmoviesComponent } from './childmovies/childmovies.component';
import { ChildlaptopsComponent } from './childlaptops/childlaptops.component';
import { ParentlaptopsComponent } from './parentlaptops/parentlaptops.component';
import { ParentmobilesComponent } from './parentmobiles/parentmobiles.component';
import { ChildmobilesComponent } from './childmobiles/childmobiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechelevateComponent,
    ParentcarsComponent,
    ChildcarsComponent,
    ChildbikesComponent,
    ParentbikesComponent,
    ParentmoviesComponent,
    ChildmoviesComponent,
    ChildlaptopsComponent,
    ParentlaptopsComponent,
    ParentmobilesComponent,
    ChildmobilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
    {path : '', component : TechelevateComponent},
    {path : 'parent-cars', component : ParentcarsComponent},
    {path : 'parent-bikes', component : ParentbikesComponent},
    {path : 'parent-movies' , component : ParentmoviesComponent},
    {path : 'parent-laptops' , component : ParentlaptopsComponent},
    {path : 'parent-mobiles' , component : ParentmobilesComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

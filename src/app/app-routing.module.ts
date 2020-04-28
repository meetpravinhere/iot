import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { HomecontentsComponent } from './homecontents/homecontents.component';
import { InnerlayoutComponent } from './innerlayout/innerlayout.component';
import { FieldsListComponent } from './fields-list/fields-list.component';
import { AddnewfieldComponent } from './addnewfield/addnewfield.component';
import { FielddetailsComponent } from './fielddetails/fielddetails.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

   {path: 'home',
   component: HomeComponent,
   children: [
     {path: '',
                 redirectTo: 'hcontents',
                 pathMatch: 'full'
     },
     {
       path: 'hcontents',
       component: HomecontentsComponent
   },
     {path: 'login', component: LoginComponent },
     {path: 'register', component: RegisterComponent}
   ]
   },

   {path: 'landing',
   component: InnerlayoutComponent,
   children: [
     {path: '', component: FieldsListComponent},
     {path: 'fieldslist', component: FieldsListComponent},
     {path: 'addnewfield', component: AddnewfieldComponent},
     {path: 'fielddetails', component: FielddetailsComponent},
     {path: 'myfields', component: FieldsListComponent}
   ]
  }

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, HomecontentsComponent, LoginComponent, RegisterComponent,
                                  AddnewfieldComponent, FieldsListComponent, FielddetailsComponent];

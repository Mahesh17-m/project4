import { Routes } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:"Home",component:HomeComponent},
    {path:"Services",component:ServicesComponent},
    {path:"About",component:AboutComponent},
    {path:"Contact",component:ContactUsComponent},
    {path:"Signup",component:SignupComponent},
    {path:"Login",component:LoginComponent}
];

import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactComponent } from './shared/pages/contact/contact.component';
import { ByCapitalPageComponent } from './countries/pages/by-capital-page/by-capital-page.component';
import { ByCountrylPageComponent } from './countries/pages/by-countryl-page/by-countryl-page.component';
import { ByRegionlPageComponent } from './countries/pages/by-regionl-page/by-regionl-page.component';
import { CountryPageComponent } from './countries/pages/country-page/country-page.component';

export const routes: Routes = [
    {
        path:'',
        component: HomePageComponent
    },
    {
        path:'about',
        component: AboutPageComponent
    },
    {
        path:'contact',
        component: ContactComponent
    },
    {
        path:'countries/by-capital',
        component: ByCapitalPageComponent
    },
    {
        path:'countries/by-country',
        component: ByCountrylPageComponent
    },
    {
        path:'countries/by-region',
        component: ByRegionlPageComponent
    },
    {
        path:'countries/by/:id',
        component: CountryPageComponent
    },
    {
        path:'**',pathMatch:'full', redirectTo:'home'
    }
    
];

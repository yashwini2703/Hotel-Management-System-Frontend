import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { HotelComponent } from './hotel/hotel.component';
import { HotelListComponent } from './hotel/hotel-list/hotel-list.component';
import { CreateHotelComponent } from './hotel/create-hotel/create-hotel.component';
import { UpdateHotelComponent } from './hotel/update-hotel/update-hotel.component';
import { HotelDetailsComponent } from './hotel/hotel-details/hotel-details.component';
import { HomeAdminComponent } from './home/home-admin/home-admin.component';
import { HotelDetailsCityComponent } from './hotel/hotel-details-city/hotel-details-city.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'home',component:HomeComponent},
{path:'hotel-list',component:HotelListComponent},
{path:'hotel', component:HotelComponent},
{path:'create-hotel', component:CreateHotelComponent},
{path:'update-hotel/:hid',component:UpdateHotelComponent},
{path:'hotel-details/:hid',component:HotelDetailsComponent},
{path:'home-admin',component:HomeAdminComponent},
{path:'hotel-details-city',component:HotelDetailsCityComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

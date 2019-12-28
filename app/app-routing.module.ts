import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PointsComponent } from './points/points.component';
import { ReferralComponent } from './referral/referral.component';
import { OffersComponent } from './offers/offers.component';
import { SettingsComponent } from './settings/settings.component';
import { ContestComponent } from './contest/contest.component';
import { MyContestComponent } from './mycontest/mycontest.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: 'home', component: HomeComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'points', component: PointsComponent },
    { path: 'referral', component: ReferralComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'contest', component: ContestComponent },
    { path: 'mycontests', component: MyContestComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

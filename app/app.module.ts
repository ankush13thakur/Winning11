import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular/listview-directives";
import { NativeScriptUICalendarModule } from "nativescript-ui-calendar/angular/calendar-directives";
import { NativeScriptUIChartModule } from "nativescript-ui-chart/angular/chart-directives";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular/dataform-directives";
import { NativeScriptUIAutoCompleteTextViewModule } from "nativescript-ui-autocomplete/angular/autocomplete-directives";
import { NativeScriptUIGaugeModule } from "nativescript-ui-gauge/angular/gauges-directives";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { OffersComponent } from "./offers/offers.component";
import { PointsComponent } from "./points/points.component";
import { ProfileComponent } from "./profile/profile.component";
import { ReferralComponent } from "./referral/referral.component";
import { SettingsComponent } from "./settings/settings.component";
import { CricketComponent } from "./cricket/cricket.component";
import { ContestComponent } from "./contest/contest.component";
import { MyContestComponent } from "./mycontest/mycontest.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule,
        NativeScriptUICalendarModule,
        NativeScriptUIChartModule,
        NativeScriptUIDataFormModule,
        NativeScriptUIAutoCompleteTextViewModule,
        NativeScriptUIGaugeModule,
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        MenuComponent,
        OffersComponent,
        PointsComponent,
        ProfileComponent,
        ReferralComponent,
        SettingsComponent,
        CricketComponent,
        ContestComponent,
        MyContestComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }

import { Component } from "@angular/core";
import * as app from 'tns-core-modules/application';
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    constructor() {}

    closeDrawer() {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}

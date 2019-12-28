import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Menu",
    moduleId: module.id,
    templateUrl: "./menu.component.html",
    styleUrls: ["./menu.component.css"]
})
export class MenuComponent {

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.toggleDrawerState();
    }
}

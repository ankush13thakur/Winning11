import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Settings",
    moduleId: module.id,
    templateUrl: "./settings.component.html",
})
export class SettingsComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

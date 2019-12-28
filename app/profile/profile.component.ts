import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Profile",
    moduleId: module.id,
    templateUrl: "./profile.component.html",
})
export class ProfileComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

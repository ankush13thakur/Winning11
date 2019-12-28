import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Referral",
    moduleId: module.id,
    templateUrl: "./referral.component.html",
})
export class ReferralComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

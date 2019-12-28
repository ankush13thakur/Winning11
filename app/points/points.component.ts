import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Points",
    moduleId: module.id,
    templateUrl: "./points.component.html",
})
export class PointsComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

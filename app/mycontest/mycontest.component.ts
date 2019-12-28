import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SegmentedBarItem, SegmentedBar } from "tns-core-modules/ui/segmented-bar/segmented-bar";

@Component({
    selector: "MyContest",
    moduleId: module.id,
    templateUrl: "./mycontest.component.html",
    styleUrls: ['./mycontest.component.css']
})
export class MyContestComponent implements OnInit {

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

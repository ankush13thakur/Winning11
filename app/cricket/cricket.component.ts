import { Component, OnInit, Input } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Cricket",
    moduleId: module.id,
    templateUrl: "./cricket.component.html",
    styleUrls: ['./cricket.component.css']
})
export class CricketComponent implements OnInit {

    @Input() toShowSingleContest: boolean;

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

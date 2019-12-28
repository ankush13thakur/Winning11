import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SegmentedBarItem, SegmentedBar } from "tns-core-modules/ui/segmented-bar/segmented-bar";

@Component({
    selector: "Contest",
    moduleId: module.id,
    templateUrl: "./contest.component.html",
    styleUrls: ['./contest.component.css']
})
export class ContestComponent implements OnInit {
    items: Array<SegmentedBarItem>;
    selectedIndex = 0;
    toShowLeaderBoard = false;

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.items = [];
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Contest";
        this.items.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "My Team";
        this.items.push(segmentedBarItem);
    }

    onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    }

    toggleLeaderBoard() {
        this.toShowLeaderBoard = !this.toShowLeaderBoard;
    }
}

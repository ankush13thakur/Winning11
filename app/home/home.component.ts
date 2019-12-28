import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { SegmentedBarItem, SegmentedBar } from "tns-core-modules/ui/segmented-bar";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    items: Array<SegmentedBarItem>;
    selectedIndex = 0;

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
        this.items = [];
        let segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Cricket";
        this.items.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Football";
        this.items.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Kabaddi";
        this.items.push(segmentedBarItem);
        segmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
        segmentedBarItem.title = "Quizes";
        this.items.push(segmentedBarItem);
    }

    onSelectedIndexChange(args) {
        let segmentedBar = <SegmentedBar>args.object;
        this.selectedIndex = segmentedBar.selectedIndex;
    }
}

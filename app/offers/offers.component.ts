import { Component, OnInit } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Offers",
    moduleId: module.id,
    templateUrl: "./offers.component.html",
})
export class OffersComponent implements OnInit {

    items: { imageSrc: string }[] = [
        { imageSrc: "~/Assets/mc-donalds.jpg" },
        { imageSrc: "~/Assets/kfc.jpg" },
        { imageSrc: "~/Assets/dominos.jpg" },
        { imageSrc: "~/Assets/subway.jpg" },
        { imageSrc: "~/Assets/star-bucks.jpg" },
        { imageSrc: "~/Assets/baskin-robbins.jpg" },
        { imageSrc: "~/Assets/bookmyshow.jpg" },
        { imageSrc: "~/Assets/burger-king.jpg" },
        { imageSrc: "~/Assets/life-style.jpg" },
        { imageSrc: "~/Assets/pantaloons.jpg" },
        { imageSrc: "~/Assets/pizza-hut.jpg" }
    ];

    constructor(private page: Page) {}

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }
}

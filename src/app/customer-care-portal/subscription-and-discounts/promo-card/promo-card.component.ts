import { EventEmitter } from '@angular/core';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
    selector: 'app-promo-card',
    templateUrl: './promo-card.component.html',
    styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {

    constructor() { }

    @Input() promoName: string = "Promo Name";
    @Input() promoInfo: string = "promo info/code";
    @Input() discount: number = 5;
    @Input() promoApplied: boolean = false;

    @Output() promoUpdate = new EventEmitter<boolean>();

    ngOnInit(): void {
    }
    promoClicked() {
        this.promoApplied=!this.promoApplied;
        this.promoUpdate.emit(this.promoApplied);
    }
    
}

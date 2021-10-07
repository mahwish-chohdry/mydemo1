import { Component, OnInit } from '@angular/core';
import { Promo } from 'src/app/shared/Models/Models';

@Component({
    selector: 'app-manage-discounts',
    templateUrl: './manage-discounts.component.html',
    styleUrls: ['./manage-discounts.component.scss']
})
export class ManageDiscountsComponent implements OnInit {


    promos: Promo[] = [{
        name:'New Promo',
        info:'Promo Info',
        selected:true,
        discount:10
    },{
        name:'Latest Promo',
        info:'Promo Info',
        selected:true,
        discount:15
    },{
        name:'Old Promo',
        info:'Promo Info',
        selected:true,
        discount:20
    },{
        name:'New Promo',
        info:'Promo Info',
        selected:true,
        discount:5
    },{
        name:'Latest Promo',
        info:'Promo Info',
        selected:true,
        discount:50
    },{
        name:'Old Promo',
        info:'Promo Info',
        selected:false,
        discount:10
    },{
        name:'New Year',
        info:'Promo Info',
        selected:false,
        discount:12
    },{
        name:'New Promo',
        info:'Promo Info',
        selected:false,
        discount:10
    },{
        name:'Latest Promo',
        info:'Promo Info',
        selected:false,
        discount:25
    },{
        name:'Old Promo',
        info:'Promo Info',
        selected:false,
        discount:20
    }];


    constructor() { }

    ngOnInit(): void {
    }
    promoUpdate(promo:Promo,_event: any){
        promo.selected=!promo.selected;
    }
}

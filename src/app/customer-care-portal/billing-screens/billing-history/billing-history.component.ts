import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDateRangePicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { AdvancedFiltersComponent } from '../advanced-filters/advanced-filters.component';

@Component({
    selector: 'app-billing-history',
    templateUrl: './billing-history.component.html',
    styleUrls: ['./billing-history.component.scss']
})
export class BillingHistoryComponent implements OnInit {
    @ViewChild('picker')
    datePicker!: MatDateRangePicker<Date>;

    dateFilter: string = "Last Month";
    constructor(private matDialog:MatDialog) { }

    ngOnInit(): void {
    }
    /**Open Date Range Picker */
    dateFilterClick(event:Event){
        if((event as any).$ngOptionLabel=="Custom Range"){
            this.datePicker.open();
        }
    }
    openAdvancedFilters(){
        this.matDialog.open(AdvancedFiltersComponent,{
            height:'72vh',
            width:'58vw',
        });
    }
}

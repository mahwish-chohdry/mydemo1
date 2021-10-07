import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advanced-filters',
  templateUrl: './advanced-filters.component.html',
  styleUrls: ['./advanced-filters.component.scss']
})
export class AdvancedFiltersComponent implements OnInit {
    dateFilter:string="Custom Range";
    hondaColor:string="#03344E"
  constructor() { }

  ngOnInit(): void {
  }

}

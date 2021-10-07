import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent implements OnInit {

  constructor() { }

  @Input() planDuration: number = 1;
  @Input() planExpiryDate: string = "9/16/2022";
  @Input() planPrice: number = 360;
  @Input() availableDiscount?: number;

  ngOnInit(): void {
  }

}

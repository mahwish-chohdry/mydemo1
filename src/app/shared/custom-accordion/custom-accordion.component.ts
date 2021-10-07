import { Component, OnInit, Input } from '@angular/core';
import { accordionPanelData } from '../Models/Models';

@Component({
  selector: 'app-custom-accordion',
  templateUrl: './custom-accordion.component.html',
  styleUrls: ['./custom-accordion.component.scss']
})
export class CustomAccordionComponent implements OnInit {

  @Input() panelData: accordionPanelData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

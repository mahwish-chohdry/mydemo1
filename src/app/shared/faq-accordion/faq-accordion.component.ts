import { Component, Input, OnInit } from '@angular/core';
import { accordionPanelData } from '../Models/Models';

@Component({
  selector: 'app-faq-accordion',
  templateUrl: './faq-accordion.component.html',
  styleUrls: ['./faq-accordion.component.scss']
})
export class FaqAccordionComponent implements OnInit {

  @Input() panelData: accordionPanelData[] = [];

  constructor() {}

  ngOnInit(): void {
  }

}

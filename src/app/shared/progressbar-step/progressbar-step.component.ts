import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressbar-step',
  templateUrl: './progressbar-step.component.html',
  styleUrls: ['./progressbar-step.component.scss']
})
export class ProgressbarStepComponent implements OnInit {

  @Input() iconUrl: string = "../../../assets/Icons/Progress icons_ colour + number/1/1- Dark grey.svg";
  @Input() stepHeading: string = "Download App";
  @Input() stepCompletionStatus: string = "9:45 pm";

  constructor() { }

  ngOnInit(): void {
  }

}

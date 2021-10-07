import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-package-card',
  templateUrl: './package-card.component.html',
  styleUrls: ['./package-card.component.scss']
})
export class PackageCardComponent implements OnInit {

  constructor() { }

  @Input() packageTitle: string = "Premium Package";
  @Input() packageDescription: string = "Remotely start, lock/unlock, find your car and more! HondaLink provides convenience at a touch with 8 additional features.";
  @Input() packagePrice: number = 20.00;
  @Input() packageDetails: string[] = ['Advanced prioritisation with Matrix', 'Advanced prioritisation with Matrix', 'Advanced prioritisation with Matrix', 'Advanced prioritisation with Matrix', 'Advanced prioritisation with Matrix'];

  ngOnInit(): void {
  }

}

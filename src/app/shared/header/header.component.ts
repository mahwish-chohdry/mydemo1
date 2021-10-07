import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  @Input() moduleName:string='Dealer Portal';
  @Input() username:string='Jane Doe';

  constructor() { }

  ngOnInit(): void {
  }

}

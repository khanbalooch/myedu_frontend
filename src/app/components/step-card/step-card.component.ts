import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-card',
  templateUrl: './step-card.component.html',
  styleUrls: ['./step-card.component.scss'],
})
export class StepCardComponent  implements OnInit {

  @Input() imgSrc: any;
  @Input() title: any;
  @Input() secondTitle: any;
  @Input() description: any;


  constructor() { }

  ngOnInit() {}

}

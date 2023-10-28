import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent  implements OnInit {

  constructor(private router: Router) { }

  @Input() content: string = '';
  @Input() path: string = '';
  ngOnInit() {
  }

  navigate(){
    console.log('Navigate to path', this.path);
    this.router.navigateByUrl(this.path);
  }
}

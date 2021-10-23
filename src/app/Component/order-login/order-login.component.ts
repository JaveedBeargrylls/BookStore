import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-login',
  templateUrl: './order-login.component.html',
  styleUrls: ['./order-login.component.scss']
})
export class OrderLoginComponent implements OnInit {

  show:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

  colors:Array<any>=[
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' }
  ]

  changeBackground() {
  //  document.body.style.background = 'red';
}

  // openDialog() {
  //   this.dialog.open(OrderLoginComponent, {
  //     data: {
  //       animal: 'panda'
  //     }
  //   });
  // }

}

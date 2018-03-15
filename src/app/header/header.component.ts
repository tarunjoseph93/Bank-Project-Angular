import { Component, OnInit } from '@angular/core';
import { FundTransferComponent } from '../fundtransfer/fundtransfer.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  over() {
    console.log('On Mouse Over');
  }

}

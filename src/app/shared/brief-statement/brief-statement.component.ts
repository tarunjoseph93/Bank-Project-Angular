import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AccountModel } from '../account.model';
import { StatementService } from '../../statement/statement.service';

@Component({
  selector: 'app-brief-statement',
  templateUrl: './brief-statement.component.html',
  styleUrls: ['./brief-statement.component.css']
})
export class BriefStatementComponent implements OnInit {
  account: AccountModel;
  
  constructor(private route: ActivatedRoute, private service: StatementService) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.account = this.service.getAccountInfo(0);
    });    
  }

}

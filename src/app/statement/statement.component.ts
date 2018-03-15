import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { StatementService } from './statement.service';
import { AccountModel } from '../shared/account.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  id: number;
  account: AccountModel;

  constructor(private service: StatementService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.account = this.service.getAccountInfo(0);
      }
    );
  }

}

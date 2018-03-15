import { OnInit, Injectable } from '@angular/core';
import { AccountModel } from '../shared/account.model';
import { LoginService } from '../login/login.service';

@Injectable()
export class StatementService implements OnInit { 
    
    private account: AccountModel[] = [
        new AccountModel('Tarun Joseph', 123456789012, 'ABCD0000012', 10000.00, 'test@test.com')
    ];

    constructor() {}

    ngOnInit() {}

    getAccountInfo(index: number) {
        return this.account[index];
    }
}
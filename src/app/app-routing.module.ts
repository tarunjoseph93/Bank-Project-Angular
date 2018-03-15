import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatementComponent } from './statement/statement.component';
import { FundTransferComponent } from './fundtransfer/fundtransfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { TransferComponent } from './fundtransfer/transfer/transfer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const appRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'statement', component: StatementComponent },
    { path: 'fund-transfer', component: FundTransferComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'deposit', component: DepositComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
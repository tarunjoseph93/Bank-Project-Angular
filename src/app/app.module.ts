import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StatementComponent } from './statement/statement.component';
import { TransferComponent } from './fundtransfer/transfer/transfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { FundTransferComponent } from './fundtransfer/fundtransfer.component';
import { MiniStatementComponent } from './statement/mini-statement/mini-statement.component';
import { BriefStatementComponent } from './shared/brief-statement/brief-statement.component';
import { AppRoutingModule } from './app-routing.module';
import { OpenfdComponent } from './deposit/openfd/openfd.component';
import { OpenrdComponent } from './deposit/openrd/openrd.component';
import { FundtransferService } from './fundtransfer/fundtransfer.service';
import { LoginComponent } from './login/login.component';
import { StatementService } from './statement/statement.service';
import { LoginService } from './login/login.service';
import { RegisterComponent } from './register/register.component';
import { DbStoreService } from './shared/db-store.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StatementComponent,
    FundTransferComponent,
    TransferComponent,
    DepositComponent,
    MiniStatementComponent,
    BriefStatementComponent,
    OpenfdComponent,
    OpenrdComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [FundtransferService, StatementService, LoginService, DbStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }

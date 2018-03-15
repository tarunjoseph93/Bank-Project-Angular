import { AccountModel } from "../../shared/account.model";
import { FundtransferService } from "../fundtransfer.service";

export class TransferService {
    public myAccount: AccountModel;
    public payee: FundtransferService[];
}
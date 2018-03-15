export class AccountModel {
    constructor(public name: string, 
        public accountNumber: number, 
        public ifsc: string, 
        public balance: number,
        public email: string) {}
}
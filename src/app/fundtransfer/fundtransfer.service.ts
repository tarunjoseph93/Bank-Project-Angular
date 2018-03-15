import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundtransferModel } from './fundtransfer.model';

@Injectable()
export class FundtransferService {
    private fundtransfer: FundtransferModel[] = [
        new FundtransferModel('Vaibhav', 121212121212, 'ABCD0000212'),
        new FundtransferModel('Gaurav', 323232323232, 'ABCD0000232')
    ];

    constructor(private route: ActivatedRoute, private router: Router) {}
    
    getToTransfer() {
        this.router.navigate(['/transfer'], {relativeTo: this.route});
    }
}
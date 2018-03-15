import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FundtransferService } from './fundtransfer.service';

@Component({
    selector: 'app-fundtransfer',
    templateUrl: './fundtransfer.component.html',
    styleUrls: ['./fundtransfer.component.css']
})
export class FundTransferComponent implements OnInit {

    constructor(private route: ActivatedRoute, private fundtransferService: FundtransferService) {}

    ngOnInit() {

    }

    onTransfer() {
        this.route.params.subscribe(() => {
            this.fundtransferService.getToTransfer();
        });
    }
}
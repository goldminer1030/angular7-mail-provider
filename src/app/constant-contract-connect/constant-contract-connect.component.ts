import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-constant-contract-connect',
  templateUrl: './constant-contract-connect.component.html',
  styleUrls: ['./constant-contract-connect.component.css']
})
export class ConstantContractConnectComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

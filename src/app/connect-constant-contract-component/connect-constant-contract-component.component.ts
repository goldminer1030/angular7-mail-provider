import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-connect-constant-contract-component',
  templateUrl: './connect-constant-contract-component.component.html',
  styleUrls: ['./connect-constant-contract-component.component.css']
})
export class ConnectConstantContractComponentComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

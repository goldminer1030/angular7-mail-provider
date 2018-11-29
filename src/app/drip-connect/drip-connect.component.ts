import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-drip-connect',
  templateUrl: './drip-connect.component.html',
  styleUrls: ['./drip-connect.component.css']
})
export class DripConnectComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

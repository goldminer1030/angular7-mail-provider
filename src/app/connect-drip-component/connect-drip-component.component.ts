import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-connect-drip-component',
  templateUrl: './connect-drip-component.component.html',
  styleUrls: ['./connect-drip-component.component.css']
})
export class ConnectDripComponentComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

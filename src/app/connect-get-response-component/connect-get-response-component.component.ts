import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-connect-get-response-component',
  templateUrl: './connect-get-response-component.component.html',
  styleUrls: ['./connect-get-response-component.component.css']
})
export class ConnectGetResponseComponentComponent implements OnInit {

  public env = env;

  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

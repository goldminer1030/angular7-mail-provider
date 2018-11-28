import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-connect-aweber-component',
  templateUrl: './connect-aweber-component.component.html',
  styleUrls: ['./connect-aweber-component.component.css']
})
export class ConnectAWeberComponentComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

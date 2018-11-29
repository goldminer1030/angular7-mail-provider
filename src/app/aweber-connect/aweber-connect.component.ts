import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-aweber-connect',
  templateUrl: './aweber-connect.component.html',
  styleUrls: ['./aweber-connect.component.css']
})
export class AweberConnectComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }
  
  ngOnInit() {
  }

}

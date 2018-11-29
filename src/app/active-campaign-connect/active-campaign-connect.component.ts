import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-active-campaign-connect',
  templateUrl: './active-campaign-connect.component.html',
  styleUrls: ['./active-campaign-connect.component.css']
})
export class ActiveCampaignConnectComponent implements OnInit {

  public env = env;
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

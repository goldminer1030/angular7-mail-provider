import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-connect-active-campaign-component',
  templateUrl: './connect-active-campaign-component.component.html',
  styleUrls: ['./connect-active-campaign-component.component.css']
})
export class ConnectActiveCampaignComponentComponent implements OnInit {

  public env = env;
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

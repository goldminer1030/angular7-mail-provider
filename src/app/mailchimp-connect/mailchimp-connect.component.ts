import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-mailchimp-connect',
  templateUrl: './mailchimp-connect.component.html',
  styleUrls: ['./mailchimp-connect.component.css']
})
export class MailchimpConnectComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

}

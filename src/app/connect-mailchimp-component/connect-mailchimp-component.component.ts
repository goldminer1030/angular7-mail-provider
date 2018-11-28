import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../../environments/environment';
import { MailchimpServiceService } from '../mailchimp-service.service';

@Component({
  selector: 'app-connect-mailchimp-component',
  templateUrl: './connect-mailchimp-component.component.html',
  styleUrls: ['./connect-mailchimp-component.component.css']
})
export class ConnectMailchimpComponentComponent implements OnInit {

  public env = env;
  
  constructor(
    public activeModal: NgbActiveModal,
    private mailService: MailchimpServiceService
  ) { }

  ngOnInit() {
  }

  connect() {
    this.mailService.authorize()
    .subscribe((data) => {
      console.log(data);
    });
    // this.activeModal.dismiss('Connect clicked');
  }

}

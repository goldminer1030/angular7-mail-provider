import { Component, OnInit } from '@angular/core';
import { MailchimpServiceService } from '../mailchimp-service.service';

@Component({
  selector: 'app-mailchimp-auth-component',
  templateUrl: './mailchimp-auth-component.component.html',
  styleUrls: ['./mailchimp-auth-component.component.css']
})
export class MailchimpAuthComponentComponent implements OnInit {

  constructor(private mailService: MailchimpServiceService) {}

  ngOnInit() {
    this.mailService.authorize()
    .subscribe((data) => {
      console.log(data);
    });
  }

}

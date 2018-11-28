import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailchimpServiceService {

  // uri = 'http://127.0.0.1:4000/mailchimp';

  constructor(private http: HttpClient) { }

  authorize() {
    // Mailchimp Authorize
    return this.http.get('/mailchimp/authorize');
  }
}

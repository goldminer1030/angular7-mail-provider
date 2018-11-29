import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment as env } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailProviderService {

  constructor(
    private http: HttpClient
  ) { }

  connectGetResponse(apikey: any, url: any) {
    return this.http.post(env.baserServerURL + '/getresponse/authorize/', {
      'apikey': apikey,
      'url': url
    })
  }

  connectActiveCampaign(apikey: any, url: any) {
    return this.http.post(env.baserServerURL + '/activecampaign/authorize/', {
      'apikey': apikey,
      'url': url
    })
  }
}

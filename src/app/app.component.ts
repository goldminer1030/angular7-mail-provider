import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ActiveCampaignConnectComponent } from './active-campaign-connect/active-campaign-connect.component';
import { AweberConnectComponent } from './aweber-connect/aweber-connect.component';
import { ConstantContractConnectComponent } from './constant-contract-connect/constant-contract-connect.component';
import { DripConnectComponent } from './drip-connect/drip-connect.component';
import { GetResponseConnectComponent } from './get-response-connect/get-response-connect.component';
import { MailchimpConnectComponent } from './mailchimp-connect/mailchimp-connect.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment as env } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Mail Provider Component';
  providers = [];
  public env = env;

  constructor(
    private _loadingBar: SlimLoadingBarService,
    private _router: Router,
    private _bsModalService: NgbModal
  ) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });

    // test data
    this.providers.push({ 'name': 'Constant Contact', 'class': 'provider-constant-contact', 'connected': false });
    this.providers.push({ 'name': 'Drip', 'class': 'provider-drip', 'connected': false });
    this.providers.push({ 'name': 'AWeber', 'class': 'provider-aweber', 'connected': false });
    this.providers.push({ 'name': 'MailChimp', 'class': 'provider-mailchimp', 'connected': false });
    this.providers.push({ 'name': 'GetResponse', 'class': 'provider-getresponse', 'connected': false });
    this.providers.push({ 'name': 'ActiveCampaign', 'class': 'provider-activecampaign', 'connected': false });
  }

  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }

  openConnectModal($event) {
    if($event) {
      switch($event.name) {
        case 'Constant Contact':
          const modalConstantContractRef = this._bsModalService.open(ConstantContractConnectComponent, { centered: true });
          modalConstantContractRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'Drip':
          const modalDripRef = this._bsModalService.open(DripConnectComponent, { centered: true });
          modalDripRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'AWeber':
          const modalAWeberRef = this._bsModalService.open(AweberConnectComponent, { centered: true });
          modalAWeberRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'MailChimp':
          const modalMailchimpRef = this._bsModalService.open(MailchimpConnectComponent, { centered: true });
          modalMailchimpRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'GetResponse':
          const modalGetresponseRef = this._bsModalService.open(GetResponseConnectComponent, { centered: true });
          modalGetresponseRef.componentInstance.title = 'Connect ' + $event.name;
          modalGetresponseRef.componentInstance.id = 10;

          modalGetresponseRef.result.then((result) => {
            console.log(result);
          }).catch((error) => {
            console.log(error);
          })
        break;
        case 'ActiveCampaign':
          const modalActivecampaignRef = this._bsModalService.open(ActiveCampaignConnectComponent, { centered: true });
          modalActivecampaignRef.componentInstance.title = 'Connect ' + $event.name;
        break;
      }
    }
  }
}

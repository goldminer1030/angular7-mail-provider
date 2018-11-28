import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
        Event,
        NavigationEnd,
        NavigationError,
        NavigationStart,
        Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { ConnectActiveCampaignComponentComponent } from './connect-active-campaign-component/connect-active-campaign-component.component';
import { ConnectAWeberComponentComponent } from './connect-aweber-component/connect-aweber-component.component';
import { ConnectConstantContractComponentComponent } from './connect-constant-contract-component/connect-constant-contract-component.component';
import { ConnectDripComponentComponent } from './connect-drip-component/connect-drip-component.component';
import { ConnectGetResponseComponentComponent } from './connect-get-response-component/connect-get-response-component.component';
import { ConnectMailchimpComponentComponent } from './connect-mailchimp-component/connect-mailchimp-component.component';
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
          const modalConstantContractRef = this._bsModalService.open(ConnectConstantContractComponentComponent, { centered: true });
          modalConstantContractRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'Drip':
          const modalDripRef = this._bsModalService.open(ConnectDripComponentComponent, { centered: true });
          modalDripRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'AWeber':
          const modalAWeberRef = this._bsModalService.open(ConnectAWeberComponentComponent, { centered: true });
          modalAWeberRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'MailChimp':
          const modalMailchimpRef = this._bsModalService.open(ConnectMailchimpComponentComponent, { centered: true });
          modalMailchimpRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'GetResponse':
          const modalGetresponseRef = this._bsModalService.open(ConnectGetResponseComponentComponent, { centered: true });
          modalGetresponseRef.componentInstance.title = 'Connect ' + $event.name;
        break;
        case 'ActiveCampaign':
          const modalActivecampaignRef = this._bsModalService.open(ConnectActiveCampaignComponentComponent, { centered: true });
          modalActivecampaignRef.componentInstance.title = 'Connect ' + $event.name;
        break;
      }
    }
  }
}

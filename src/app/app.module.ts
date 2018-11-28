import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { MailchimpServiceService } from './mailchimp-service.service';
import { MailchimpAuthComponentComponent } from './mailchimp-auth-component/mailchimp-auth-component.component';
import { ConnectConstantContractComponentComponent } from './connect-constant-contract-component/connect-constant-contract-component.component';
import { ConnectDripComponentComponent } from './connect-drip-component/connect-drip-component.component';
import { ConnectAWeberComponentComponent } from './connect-aweber-component/connect-aweber-component.component';
import { ConnectMailchimpComponentComponent } from './connect-mailchimp-component/connect-mailchimp-component.component';
import { ConnectGetResponseComponentComponent } from './connect-get-response-component/connect-get-response-component.component';
import { ConnectActiveCampaignComponentComponent } from './connect-active-campaign-component/connect-active-campaign-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MailchimpAuthComponentComponent,
    ConnectConstantContractComponentComponent,
    ConnectDripComponentComponent,
    ConnectAWeberComponentComponent,
    ConnectMailchimpComponentComponent,
    ConnectGetResponseComponentComponent,
    ConnectActiveCampaignComponentComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MailchimpServiceService ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConnectConstantContractComponentComponent,
    ConnectDripComponentComponent,
    ConnectAWeberComponentComponent,
    ConnectMailchimpComponentComponent,
    ConnectGetResponseComponentComponent,
    ConnectActiveCampaignComponentComponent
  ]
})
export class AppModule { }

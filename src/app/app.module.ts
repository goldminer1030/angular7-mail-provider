import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { MailchimpConnectComponent } from './mailchimp-connect/mailchimp-connect.component';
import { GetResponseConnectComponent } from './get-response-connect/get-response-connect.component';
import { DripConnectComponent } from './drip-connect/drip-connect.component';
import { ConstantContractConnectComponent } from './constant-contract-connect/constant-contract-connect.component';
import { AweberConnectComponent } from './aweber-connect/aweber-connect.component';
import { ActiveCampaignConnectComponent } from './active-campaign-connect/active-campaign-connect.component';

@NgModule({
  declarations: [
    AppComponent,
    MailchimpConnectComponent,
    GetResponseConnectComponent,
    DripConnectComponent,
    ConstantContractConnectComponent,
    AweberConnectComponent,
    ActiveCampaignConnectComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ ],
  bootstrap: [AppComponent],
  entryComponents: [
    ConstantContractConnectComponent,
    DripConnectComponent,
    AweberConnectComponent,
    MailchimpConnectComponent,
    GetResponseConnectComponent,
    ActiveCampaignConnectComponent
  ]
})
export class AppModule { }

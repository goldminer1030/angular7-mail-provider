import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailchimpAuthComponentComponent } from './mailchimp-auth-component/mailchimp-auth-component.component';

const routes: Routes = [
  {
    path: 'mailchimp',
    component: MailchimpAuthComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

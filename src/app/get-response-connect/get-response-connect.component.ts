import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { MailProviderService } from '../mail-provider.service';
import { environment as env } from '../../environments/environment';

@Component({
  selector: 'app-get-response-connect',
  templateUrl: './get-response-connect.component.html',
  styleUrls: ['./get-response-connect.component.css']
})
export class GetResponseConnectComponent implements OnInit {

  public env = env;
  public isConnected = false;
  public statusMessage = 'Not Connected';
  connectForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private mailService: MailProviderService,
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  private createForm() {
    this.connectForm = this.formBuilder.group({
      apikey: '',
      url: ''
    })
  }

  private submitForm() {
    this.mailService.connectGetResponse(this.connectForm.value.apikey, this.connectForm.value.url).subscribe(data => {
      if(data['success']) {
        this.isConnected = true;
        this.statusMessage = data['message'];
      } else {
        this.statusMessage = 'Not Connected';
      }
    }, error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

}

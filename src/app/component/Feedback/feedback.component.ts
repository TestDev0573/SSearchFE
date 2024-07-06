import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListService} from '../../service/list.service'
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styles: []
})
export class FeedbackComponent implements OnInit {
  feedbackForm: FormGroup;
  submitted = false;
  postFeedback:any=[];
  submitMessage:string;
  message:string;
  constructor(private formBuilder: FormBuilder,private _listService:ListService) { }
  ngOnInit() {
    this.feedbackForm = this.formBuilder.group({
      city: ['', Validators.required],
      message: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    });
  }
  get f() { return this.feedbackForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.feedbackForm.invalid) {
      return;
    }
    this._listService.postFeedback(this.feedbackForm.value).subscribe(data=>{
      this.postFeedback=data;
      if(this.postFeedback.status==="success"){
        this.submitMessage=this.postFeedback.result;
        
      }
    })
  }
  _keyPress(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  FadeOutSuccessMsg() {
    setTimeout( () => {
        this.submitMessage = '';
        }, 4000);
   }
  onReset() {
    this.submitted = false;
    this.feedbackForm.reset();
  }
}

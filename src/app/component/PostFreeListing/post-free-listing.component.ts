import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ListService} from '../../service/list.service'
@Component({
  selector: 'app-post-free-listing',
  templateUrl: './post-free-listing.component.html',
  styleUrls: ['./post-free-listing.component.scss']
})
export class PostFreeListingComponent implements OnInit {
  freeListingForm: FormGroup;
  submitted = false;
  postListing:any=[];
  submitMessage:string;
  message:string;
  constructor(private formBuilder: FormBuilder,private _listService:ListService) { }
  ngOnInit() {
    this.freeListingForm = this.formBuilder.group({
      companyName: ['', Validators.required],
      city: ['', Validators.required],
      locality: ['', Validators.required],
      message: [''],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    });
  }
  get f() { return this.freeListingForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.freeListingForm.invalid) {
      return;
    }
    this._listService.postFreeListing(this.freeListingForm.value).subscribe(data=>{
      this.postListing=data;
      if(this.postListing.status==="success"){
        this.submitMessage=this.postListing.result;
        this.freeListingForm.reset();
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
    this.freeListingForm.reset();
  }
}

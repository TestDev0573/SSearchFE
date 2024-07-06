import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from  "@angular/forms";
import {ListService} from "../../service/list.service";
@Component({
  selector: 'app-get-contact',
  templateUrl: './get-contact.component.html',
  styles: []
})
export class GetContactComponent implements OnInit {
  getBestDealsForm:FormGroup;
  submitted = false;
  bestDeails:any=[];
  submitMessage:string;
  isLoading:boolean=false;
  constructor(private fb:FormBuilder,private _listService:ListService) { }
  ngOnInit() {
    this.getBestDealsForm=this.fb.group({
      name:['',Validators.required],
      mobile:['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      email:['',[Validators.required,Validators.email]],
      message:['',Validators.required],
    })
  }
  get f() { return this.getBestDealsForm.controls; }
  onSubmit(){
    this.submitted=true;
    if(this.getBestDealsForm.invalid){ return;} 
      this.isLoading=true;
      this._listService.postBestDesilsDetails(this.getBestDealsForm.value).subscribe(
        data=>{
        this.bestDeails=data;
        if(this.bestDeails.status==="success"){
            this.isLoading=false;
            this.submitMessage=this.bestDeails.result;
        }
        }
    )
  }
  FadeOutSuccessMsg() {
    setTimeout( () => {
        this.submitMessage = '';
        }, 4000);
   }
}

import { Component, OnInit,ChangeDetectorRef,Input,ElementRef } from '@angular/core';
import{ListService} from "../../service/list.service";
import {FormBuilder,FormGroup} from "@angular/forms";
 
@Component({
  selector: 'app-write-your-review',
  templateUrl: './write-your-review.component.html',
  styleUrls: ['./review.css']
})
export class WriteYourReviewComponent implements OnInit {
  @Input() DelarId: string;
  writeReviewForm:FormGroup;
  selectedFile:File = null;
  isLoading:boolean=false;
  submitReviewResult:any=[];
  reviewStatusMessage:string;
  constructor(private _listService:ListService,public element: ElementRef,private fb:FormBuilder,private cd: ChangeDetectorRef) { }
  ngOnInit() {
    this.writeReviewForm=this.fb.group({
      name:[''],
      rating:[''],
      message:['']
     
    })
   
  }
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0]
  
  }
  submitReview():void{
    this.isLoading=true;
    const fd=new FormData();
    if(this.selectedFile!=null){ fd.append('image',this.selectedFile,this.selectedFile.name);}
   
    fd.append('name',this.writeReviewForm.controls.name.value);
    fd.append('rating',this.writeReviewForm.controls.rating.value);
    fd.append('message',this.writeReviewForm.controls.message.value);
    fd.append('dealer_id',this.DelarId);
    this._listService.postReview(fd).subscribe(
      data=>{
      this.submitReviewResult=data;
      if(this.submitReviewResult.status==='success'){
        this.isLoading=false;
        this.writeReviewForm.reset();
        this.reviewStatusMessage=this.submitReviewResult.result;
      }
    },
    error=>{
      this.reviewStatusMessage=error(error);
      this.isLoading = false;
    }
    )
   
    // let files=this.element.nativeElement.querySelector("#selectFile").files;
     //let file=files[0];
     //console.log("sdfsd"+file);
    // this._listService.postReview(JSON.stringify(this.writeReviewForm)).subscribe(data=>{
    //   console.log(data);
    // })
    }
    FadeOutSuccessMsg() {
      setTimeout( () => {
          this.reviewStatusMessage = '';
          }, 4000);
     }

}

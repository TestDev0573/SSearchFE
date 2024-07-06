import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from "@angular/router"; 
import {ListService} from '../../service/list.service';
import {environment} from "../../../environments/environment";
import {Title} from "@angular/platform-browser"; 
@Component({
  selector: 'app-dealer-details',
  templateUrl: './dealer-details.component.html',
  styleUrls: ['./dealer-details.component.scss']
})
export class DealerDetailsComponent implements OnInit {
  searchBxSwHd:boolean;
  queryDetailsObj: any;
  dealerId:number;
  youTubeImg:string;
  keyWord:string;
  dealerDetails:any;
  ReviewRatingList:any=[];
  showHideDealerList:boolean=false;
  reviewImage:string=environment.reviewUserImage;
  imageFolder:string="http://localhost:81/satish_project/BUY_AND_SELL/b_s_demo/uploads/images/";
  weekArray:any=environment.weekArray;
  arr = Array;
  bannerImages:any=[];
  pageOfItems: Array<any>;
  constructor(private titleService: Title,private _listService:ListService,private activatedRoute: ActivatedRoute) { 
    if(! this.dealerDetails){
      this.dealerDetails={}
    }
  }
  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.queryDetailsObj = {...params.keys, ...params};
      this.keyWord=this.queryDetailsObj.params.q.substr(0, this.queryDetailsObj.params.q.indexOf('in')-1).replace('-',' ');
      this.dealerId=this.queryDetailsObj.params.q.split('-')[this.queryDetailsObj.params.q.split('-').length-1];
      this.getDealerDetails(this.dealerId);
    });
      this.getReviewRating(this.dealerId);
      this._listService.currentMessage.subscribe(message => this.searchBxSwHd = message); 
      this.newMessage();
  }
  newMessage() {
    this._listService.changeMessage(true)
  }
  getDealerDetails(dealerId){
    this._listService.getDelaerDetails(dealerId).subscribe(data=>{
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.dealerDetails=element;
            this.titleService.setTitle(this.dealerDetails.association_name+ ','+"  " +this.dealerDetails.locality_name+"-  "+this.keyWord+' in '+ this.dealerDetails.city_name+'-'+"Deals Pakki");
            this.youTubeImg="https://img.youtube.com/vi/"+this.dealerDetails.video_url.split("v=")[1]+"/hqdefault.jpg";
        }
      }
    })
  }
  getReviewRating(dealerId){
    this._listService.getReviewRating(this.dealerId).subscribe(res=>{
      this.ReviewRatingList=res;
      //console.log(this.ReviewRatingList);
    })
  }
  showHideOffices():void{
    this.showHideDealerList =!this.showHideDealerList;
  }
  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }
  splitStringToArray(theString: string) {
    if(theString){return theString.split(',');}
    
  } 
}

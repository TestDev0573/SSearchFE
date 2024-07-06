import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment'
import {Router,ActivatedRoute,NavigationEnd} from "@angular/router"; 
import {ListService} from "../../service/list.service";
const nisPackage = require('../../../../package.json');
@Component({
  selector: 'app-alllist',
  templateUrl: './alllist.component.html',
  styleUrls: ['./alllist.component.scss']
})
export class AlllistComponent implements OnInit {
  list:any=[];
  arr = Array;
  loadMore:boolean=true;
  searchBxSwHd:boolean;
  searchKeyword:string;
  regionCode:string;
  popularAreaProp:any;
  location:string;
  keyWord:string;
  listImageUrl:string=environment.listImagesFolder;
  url :string;
  displayArray:any=[];
  displayList:any=[];
  sum = 20;
  throttle = 300;
  scrollDistance = 1;
  scrollUpDistance = 2;
  direction = '';
  modalOpen = false;
  nisVersion = nisPackage.dependencies['ngx-infinite-scroll'];
  constructor(private _listService:ListService,private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.url=window.location.pathname;
      this.searchKeyword=this.url.substr(1, this.url.indexOf('in')-2).replace('-',' ');
      this.regionCode=this.url.split('-')[this.url.split('-').length-2]+'-'+this.url.split('-')[this.url.split('-').length-1];
      this.popularAreaProp={popularArea:this.keyWord,region:this.regionCode};
    });
    
    //this.appendItems(0, this.sum);
  } 
  ngOnInit() {
    this._listService.currentMessage.subscribe(message => this.searchBxSwHd = message); 
    this.newMessage();
    this.getLocation(this.url);
    this.getKeyWord(this.searchKeyword);
    this._listService.getList(this.searchKeyword,this.regionCode).subscribe((data) => {
      if(data){
        this.loadMore=false;
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            const element = data[key];
            this.list.push(element)
          }
        }
      }  
     // console.log(this.list)
       if(this.list){
        this.appendItems(0, this.sum);
       }
  });
  } 
  newMessage() {
    this._listService.changeMessage(true)
  }
  addItems(startIndex, endIndex, _method) {
    for (let i = startIndex; i < endIndex; ++i) {
      if(this.list[i]!=undefined)
      this.displayArray[_method](this.list[i]);
    }
    //this.list.slice(startIndex,endIndex);
    console.log(this.displayArray)
  }
  
  appendItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'push');
  }
  
  prependItems(startIndex, endIndex) {
    this.addItems(startIndex, endIndex, 'pop');
  }

  onScrollDown (ev) {
    console.log('scrolled down!!', ev);

    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
    
    this.direction = 'down'
  }
  
  onUp(ev) {
    console.log('scrolled up!', ev);
    const start = this.sum;
    this.sum += 20;
    this.prependItems(start, this.sum);
  
    this.direction = 'up';
  }
  goToDetailPage(link):void{
     console.log(link);
    // this.router.navigate(['Details?'.link
    // ]);
  }
  getLocation(url:string){
    var str=url;
    var locArr=str.substr(str.indexOf('in-')).split('-');
    var str="";
    for(let i=0;i<locArr.length-2;i++){
    str +=locArr[i].charAt(0).toUpperCase() + locArr[i].slice(1);
    str +=" "
    }
     this.location=str;
  }
  getKeyWord(keyWord:string){
    var keyWordArr=keyWord.split(" ");
    var outKeyWord="";
    for(let i=0;i<keyWordArr.length;i++){
      outKeyWord +=keyWordArr[i].charAt(0).toUpperCase() + keyWordArr[i].slice(1);
      outKeyWord +=" ";
    }
    this.keyWord=outKeyWord;
    this.popularAreaProp={popularArea:this.keyWord,region:this.regionCode}
  }
}

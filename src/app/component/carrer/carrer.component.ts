import { Component, OnInit } from '@angular/core';
import {ListService} from '../../service/list.service';
@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styles: []
})
export class CarrerComponent implements OnInit {
  jobList:any=[];
  searchBxSwHd:boolean;
  constructor(private _listService:ListService) { }
  ngOnInit() {
    this._listService.currentMessage.subscribe(message => this.searchBxSwHd = message); 
    this.newMessage();
    this.getAlljobs();
  }
  newMessage() {
    this._listService.changeMessage(true)
  }
  getAlljobs(){
      this._listService.getJobs().subscribe(data=>{
        this.jobList=data;
      })
  }
}

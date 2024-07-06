import { Component, OnInit } from '@angular/core';
import {ListService} from "../../service/list.service"
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent implements OnInit {
  searchBxSwHd:boolean;
  constructor(private _listService:ListService,) { }
  ngOnInit() {
    this._listService.currentMessage.subscribe(message => this.searchBxSwHd = message); 
    this.newMessage();
  }
  newMessage() {
    this._listService.changeMessage(true)
  }
}

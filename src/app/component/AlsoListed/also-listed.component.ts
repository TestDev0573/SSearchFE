import { Component, OnInit,Input } from '@angular/core';
import {ListService} from "../../service/list.service"
@Component({
  selector: 'app-also-listed',
  templateUrl: './also-listed.component.html',
  styles: []
})
export class AlsoListedComponent implements OnInit {
 @Input() DelarId:string;
  alsoListed:any=[];
  constructor(private _listService:ListService) { }
  ngOnInit() {
      this._listService.getAlsoListed(this.DelarId).subscribe(data=>{
        this.alsoListed=data;
      })
  }

}

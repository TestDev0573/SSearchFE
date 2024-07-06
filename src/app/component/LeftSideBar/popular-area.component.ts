import { Component, OnInit ,Input} from '@angular/core';
import{ListService} from '../../service/list.service'; 
@Component({
  selector: 'app-popular-area',
  templateUrl: './popular-area.component.html',
  styles: []
})
export class PopularAreaComponent implements OnInit {
  @Input() popularAreaProps :{popularArea:string,region:string};
  popularAreaLink:any=[];
  constructor(private _listService:ListService) { }
  ngOnInit() {
    this.getAllPopuAreaLink();
  }
  getAllPopuAreaLink(){
        this._listService.getAllPopuAreaLink(this.popularAreaProps.region,this.popularAreaProps.popularArea).subscribe(data=>{
          this.popularAreaLink=data;
        })
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import{ListService } from "../service/list.service"
@Pipe({
  name: 'getListingImage'
})
export class GetListingImagePipe implements PipeTransform {
  imageName:string;
  imageExtention:string;
  constructor(private _listService: ListService) {
  }
  transform(value: any): any {
    console.log(value);
    this._listService.getListImage(value).subscribe(data=>{
      //console.log(data);
      this.imageExtention=data[0]['images'].split('.').pop();
      console.log(this.imageExtention)
    })
    return "https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60";
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {environment} from "../../environments/environment"
@Pipe({
  name: 'getthumbImage'
})
export class GetthumbImagePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
     if(value){
        var fileExtention=value.split('.').pop();
        var FileName=value.split('.')[0];
        return environment.listImagesFolder+FileName+'_thumb'+'.'+fileExtention;
     }
      return environment.listImagesFolder+'noImage.jpeg';
  }
}

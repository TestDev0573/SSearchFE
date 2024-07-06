import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertStringToNumber'
})
export class ConvertStringToNumberPipe implements PipeTransform {

  transform(value: any): any {
    if(value===null || value===''){
      return 0;
    }
    return Math.ceil(parseInt(value));
  }

}

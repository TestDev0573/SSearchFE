import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'officeWorking'
})
export class OfficeWorkingPipe implements PipeTransform {
  transform(value: any): any {
    console.log("sdfdsfdsf");
    
  }
}

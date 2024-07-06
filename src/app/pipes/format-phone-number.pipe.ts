import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhoneNumber'
})
export class FormatPhoneNumberPipe implements PipeTransform {

  transform(value:any): any {
   
    var cleaned = ('' + value).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return  '+'+91+' ' + match[1] + '-' + match[2] + '-' + match[3]
  }
  return 'no phone number or Invalid phone number'
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import {environment}  from "../../environments/environment"

@Pipe({
  name: 'checkWorkingHours'
})
export class CheckWorkingHoursPipe implements PipeTransform {
  transform(value: any=null,closedDay:string=null): any {
    var today = new Date();
    var day = today.getDay();
     var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    var currentTime=new Date().toTimeString().split(" ")[0];
    if(closedDay){
      if(currentTime>=value.split('-')[0] && currentTime<=value.split('-')[1] && daylist[day] !==closedDay ){
        return "OPEN NOW";
     }
     else {
         return "CLOSED";
     }
    }
   
    // else{
    //   var H = +startTime.substr(0, 2);
    //   var h = H % 12 || 12;
    //   var ampm = (H < 12 || H === 24) ? "AM" : "PM";
    //   startTime = h + startTime.substr(2, 3) + ampm;
      
    //   var H = +endTime.substr(0, 2);
    //   var h = H % 12 || 12;
    //   var ampm = (H < 12 || H === 24) ? "AM" : "PM";
    //   endTime = h + endTime.substr(2, 3) + ampm;
    //   if(startTime !='' && endTime !=''){
    //     return startTime + '-'+endTime;
    //   }
    // }
   
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'workingHours'
})
export class WorkingHoursPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if(value===args[0]){
      return value + "   " + "Closed";
    }
    else{
      var totalWorking= args[1].split('-');
      var StartTiming=this.get12HoursFormat(totalWorking[0]);
      var endTiming=this.get12HoursFormat(totalWorking[1]);
      return value + "     "  + StartTiming +"-" +endTiming;
    }
    
  }
  get12HoursFormat(time){
      var H = +time.substr(0, 2);
      var h = (H % 12) || 12;
      var ampm = H < 12 ? "AM" : "PM";
      return time = h + time.substr(2, 3) + ampm;
  }

}

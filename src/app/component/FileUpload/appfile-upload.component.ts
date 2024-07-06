import { Component, OnInit,ElementRef,Input,HostListener } from '@angular/core';
@Component({
  selector: 'app-appfile-upload',
  templateUrl: './appfile-upload.component.html',
  styles: [],
  
})
export class AppfileUploadComponent implements OnInit{

  @Input() progress;
  
  private file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {
    const file = event && event.item(0);
    this.file = file;
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }
  ngOnInit(){

  }
  
}

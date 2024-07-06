import { Component,OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import {Router, ActivatedRoute,NavigationEnd } from "@angular/router";
import {ListService} from "./service/list.service";
import { Title } from '@angular/platform-browser';
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent {
   title:string ="Dealspakki-Local search";
   myControl = new FormControl();
   url:string;
   constructor(private titleService: Title,private _router: Router,private _listService:ListService,private activatedRoute: ActivatedRoute,private router: Router){
      this.router.routeReuseStrategy.shouldReuseRoute = function(){
         return false;
     };
     this.router.events.subscribe((evt) => {
         if (evt instanceof NavigationEnd) {
             this.router.navigated = false;
             window.scrollTo(0, 0);
         }
     });
   }
   ngOnInit(){
      this.titleService.setTitle(this.title);
    }
}
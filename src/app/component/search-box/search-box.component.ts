import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';
import {Router, ActivatedRoute,NavigationEnd } from "@angular/router";
import {ListService} from "../../service/list.service";
import { environment } from "../../../environments/environment";
@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit {
  searchForm: FormGroup;
  url:string;
  searchBxSwHd:boolean;
  submitted = false;
  city : string;
  locality:string;
  keyword:string;
  regionCode:string;
  filteredCity:any;
  filteredLocality:any;
  filteredKeyword:any
  isLoading = false;
  name:string;
  errorMsg: string;
  constructor(private _listService:ListService,private http: HttpClient, private activatedRoute: ActivatedRoute,private fb: FormBuilder,private router: Router) {
   }
  ngOnInit() {
    this.activatedRoute.url.subscribe(activeUrl =>{
      this.url=window.location.pathname;
      this.keyword=this.url.substr(1, this.url.indexOf('in')-2).replace('-',' ');
      this.city=this.url.split('-')[this.url.split('-').length-3];
    });
    this._listService.currentMessage.subscribe(message => this.searchBxSwHd = message
      );
    //   this.router.routeReuseStrategy.shouldReuseRoute = function(){
    //     return false;
    // };

    // this.router.events.subscribe((evt) => {
    //     if (evt instanceof NavigationEnd) {
    //         this.router.navigated = false;
    //         window.scrollTo(0, 0);
    //     }
    // });
    this.searchForm = this.fb.group({
      city: ['Delhi', Validators.required],
      locality: ['', Validators.required],
      keyword: ['', Validators.required]
    })
    this.searchForm.patchValue({keyword:this.keyword,city:this.city});
    // City Auto Complete
    this.searchForm.controls.city.valueChanges
      .pipe(

        debounceTime(400),
        tap(() => {
          this.errorMsg = "";
          this.filteredCity = [];
          this.isLoading = true;
        }),
        
        switchMap(value =>
          
           this.http.get(environment.apiEndpoint+value)
          .pipe(
            finalize(() => {
              this.isLoading = false
            }),
          )
        )
      )
      .subscribe(data => {
           for (const key in data) {
             if (data.hasOwnProperty(key)) {
               const element = data[key];
               this.filteredCity.push(element)
              // console.log(element.city_name)
             }
           }
      });

      // locality Auto Complete
    this.searchForm.controls.locality.valueChanges
    .pipe(
      debounceTime(400),
     
      tap(() => {
        this.errorMsg = "";
        this.filteredLocality = [];
        this.isLoading = true;
      }),
      
      switchMap(value => 
        this.http.get(environment.apiEndpoint+"locality/" +this.searchForm.controls.city.value.replace(/%20/g, " ")+'/'+value)
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          this.filteredLocality.push(element.locality_name)
         // console.log(element.city_name)
        }
      }
    });
    // Keyword Auto Complete
    this.searchForm.controls.keyword.valueChanges
    .pipe(
      debounceTime(50),
      tap(() => {
        this.errorMsg = "";
        this.filteredKeyword = [];
        this.isLoading = true;
      }),
      switchMap(value => this.http.get(environment.apiEndpoint+"getKeyword/" + value)
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          const element = data[key];
          this.filteredKeyword.push(element.category_name)
         // console.log(element.city_name)
        }
      }
    });
  }
  onSearch():void {
    this.city=this.searchForm.controls.city.value.toLowerCase();
    this.locality=this.searchForm.controls.locality.value.toLowerCase();
    this.keyword=this.searchForm.controls.keyword.value.toLowerCase();
    this._listService.getRegionCode(this.city,this.locality).subscribe(data=>{
      this.regionCode=data[0].locality_region_code;
      //alert();
      this.router.navigate(['/'.concat(this.keyword.replace(/\s+/g, '-'),'-in-',this.locality.replace(/\s+/g, '-'),'-',this.city,'-',this.regionCode.replace(/\s+/g, '-')
    )]);
    })
    //console.log(this.regionCode);

    
  } 
  inputChanged(element: HTMLElement) {
    console.log(element.getAttribute('formControlName')) // item_name 
  }
  // convenience getter for easy access to form fields
  get f() { return this.searchForm.controls; }
 
}



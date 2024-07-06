import { Injectable } from '@angular/core';
import {HttpClient,} from "@angular/common/http";
import {Listing} from "../model/listing";
import {environment} from '../../environments/environment'
import {Observable,BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  private messageSource = new BehaviorSubject(false);
  currentMessage = this.messageSource.asObservable();
constructor(private http: HttpClient) { }
changeMessage(message: boolean) {
  this.messageSource.next(message)
}
getList(keyword,regionCode){
  return this.http.get(environment.apiEndpoint + 'getList/'+keyword+'/'+regionCode)
  }
  getRegionCode(city,locality){
    return this.http.get(environment.apiEndpoint+'getRegionCode/'+city+'/'+locality);
  }
  getAllPopuAreaLink(regionCode,searchKeyword){
    return this.http.get(environment.apiEndpoint+'getAllPopuAreaLink/'+regionCode+'/'+searchKeyword);
  }
  getDelaerDetails(DealerId){
    return this.http.get(environment.apiEndpoint + 'getDealerDetails/'+DealerId);
  }
  getAlsoListed(DealerId){
    return this.http.get(environment.apiEndpoint + 'getAlsoListed/'+DealerId);
  }
  postReview(formDatValue){
    return this.http.post(environment.apiEndpoint + 'postReview/',formDatValue);
  }
  getReviewRating(DealerId){
    return this.http.get(environment.apiEndpoint + 'getReviewRating/'+DealerId);
  }
  postBestDesilsDetails(getBestDeails:any){
    var body = JSON.stringify(getBestDeails);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiEndpoint + 'postBestDesilsDetails/',body);
  }
  postFreeListing(postFlisting:any){
    var body = JSON.stringify(postFlisting);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiEndpoint + 'postFreeListing/',body);
  }
  postFeedback(postFeedback:any){
    var body = JSON.stringify(postFeedback);
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.apiEndpoint + 'postFeedback/',body);
  }
  getListImage(id:number){
    return this.http.get(environment.apiEndpoint + 'getListImage/'+id);
  }
  getBannerImages(id:number){
      return this.http.get(environment.apiEndpoint+'getBannerImages/'+id);
  }
  getJobs(){
    return this.http.get(environment.apiEndpoint+'getJobs');
}
}

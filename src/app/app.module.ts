import { BrowserModule,Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatAutocompleteModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBoxComponent } from './component/search-box/search-box.component';
import { HomeComponent } from './component/home.component';
import { AppRoutingModule} from "./app-routing.module";
import {AlllistComponent} from "./component/listing/alllist.component";
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {AngularmateriaModule} from "./material/angularmateria/angularmateria.module";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FooterComponent } from './component/layout/footer.component';
import { HeaderComponent } from './component/layout/header.component';
import { CheckWorkingHoursPipe } from './pipes/check-working-hours.pipe';
import { DealerDetailsComponent } from './component/DetailsPage/dealer-details.component';
import { UrlDecodePipe } from './pipes/url-decode.pipe';
import {UrlSerializer} from '@angular/router';
import {CustomUrlSerializer} from './component/CustomUrlSerializer';
import { FormatPhoneNumberPipe } from './pipes/format-phone-number.pipe';
import { WriteYourReviewComponent } from './component/Review/write-your-review.component';
import { GetContactComponent } from './component/GetContact/get-contact.component';
import { AppfileUploadComponent } from './component/FileUpload/appfile-upload.component';
import { ConvertStringToNumberPipe } from './pipes/convert-string-to-number.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { GetthumbImagePipe } from './pipes/getthumb-image.pipe';
import {AboutComponent} from './component/About/about.component';
import {CarrerComponent} from "./component/carrer/carrer.component";
//import { TermsandconditionComponent } from './component/';
import { PostFreeListingComponent } from './component/PostFreeListing/post-free-listing.component';
import { FeedbackComponent } from './component/Feedback/feedback.component';
import { PopularAreaComponent } from './component/LeftSideBar/popular-area.component';
import { OfficeWorkingPipe } from './pipes/WorkingHours/office-working.pipe';
import { WorkingHoursPipe } from './pipes/working-hours.pipe';
import { AlsoListedComponent } from './component/AlsoListed/also-listed.component';
@NgModule({
   declarations: [
      AppComponent,
      SearchBoxComponent,JwPaginationComponent,HomeComponent,AlllistComponent, FooterComponent, HeaderComponent, CheckWorkingHoursPipe, DealerDetailsComponent, UrlDecodePipe, FormatPhoneNumberPipe, WriteYourReviewComponent, GetContactComponent, AppfileUploadComponent, ConvertStringToNumberPipe, GetthumbImagePipe, AboutComponent,CarrerComponent, PostFreeListingComponent, FeedbackComponent, PopularAreaComponent, OfficeWorkingPipe, WorkingHoursPipe, AlsoListedComponent
   ],
   imports: [
      BrowserModule,HttpClientModule,AppRoutingModule,RouterModule,
      BrowserAnimationsModule,AngularmateriaModule,MatProgressBarModule,
      MatAutocompleteModule,MatFormFieldModule,
      MatInputModule,InfiniteScrollModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [Title,{ provide: UrlSerializer, useClass: CustomUrlSerializer }],
   bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home.component";
import {AlllistComponent} from './component/listing/alllist.component';
import {DealerDetailsComponent} from "./component/DetailsPage/dealer-details.component";
import {AboutComponent} from "./component/About/about.component";
import {CarrerComponent} from "./component/carrer/carrer.component";
import {PostFreeListingComponent} from "./component/PostFreeListing/post-free-listing.component";
import {FeedbackComponent} from "./component/Feedback/feedback.component"
//import {TermsandconditionComponent} from './component/TermsAndConditions/termsandcondition.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Details",  component: DealerDetailsComponent },
  { path: "aboutus",  component: AboutComponent },
  { path: "post-free-listing",  component: PostFreeListingComponent },
  { path: "feedback",  component: FeedbackComponent },
  { path: "carrer",  component: CarrerComponent },
  { path: "**", component: AlllistComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiEndpoint: 'http://localhost:81/satish_project/BUY_AND_SELL/b_s_demo/api/BuySaleApi/',
  listImagesFolder: 'http://localhost:81/satish_project/BUY_AND_SELL/b_s_demo/uploads/images/thumbnail/',
  reviewUserImage: 'http://localhost:81/satish_project/BUY_AND_SELL/b_s_demo/uploads/images/reviewImages/thumbnail/',
  weekArray:['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

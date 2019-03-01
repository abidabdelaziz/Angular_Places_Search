export class Place {

    // APP ID
    // vemrZGz2ClCXgGj8JYbI
    // APP CODE
    // 7vnzvGoIGKfqEiM-Dnhbfw

    // https://places.cit.api.here.com/places/v1/discover/search
    // ?app_id={YOUR_APP_ID}
    // &app_code={YOUR_APP_CODE}
    // &at=52.5044,13.3909
    // &q=restaurant
    // &pretty

    // Base URL + Path + Resource + Application ID + Application Code
    // Base URL	https://places.api.here.com
    // Path	/places/v1/
    // Resource discover/search
    // // Paramater : @in 
    // // // circle : lat,long;r=radius
    // // // polygon :  west longitude, south latitude, east longitude, north latitude
    // Application ID
    // Application Code

    // Example~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*~*
    // https://places.cit.api.here.com/places/v1/discover/search
    // ?app_id={YOUR_APP_ID}
    // &app_code={YOUR_APP_CODE}
    // &in=52.5044,13.3909;r=radius 
    // &q=restaurant
    // &pretty




    constructor(
        public id: number,
        public wLong:number,
        public sLat:number,
        public eLong:number,
        public nLat:number,
      ) {  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GetReqPlaces {

  constructor(private http: HttpClient) { }

  getPlaces(wLong,sLat,eLong,nLat){
        
    let obj = {params: {westLong: wLong, southLat: sLat, eastLong:eLong, northLat:nLat }};

    let params = new HttpParams().set("westLong" , wLong).set("southLat", sLat).set( "eastLong" , eLong).set("northLat", nLat);
    
    return this.http.get( 'api/find/places', { params : params}).subscribe(res=>console.log(res))

  }

  // getPlaces(wLong,sLat,eLong,nLat){
  //   let appId = environment.appId;
  //   let appCode = environment.appCode;
  //   let URL= `https://places.cit.api.here.com/places/v1/discover/search?app_id={${appId}}&app_code={${appCode}}&in=${wLong},${sLat},${eLong},${nLat}&pretty`
                  
  //   return this.http.get( `${URL}` )
  //   .subscribe(data=>{
  //     console.log(data)
  //   })
  // }


}

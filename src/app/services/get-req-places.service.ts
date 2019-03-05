import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GetReqPlaces {

  constructor(private http: HttpClient) { }

  getPlaces(wLong,sLat,eLong,nLat){
        
    // let obj = {params: {westLong: wLong, southLat: sLat, eastLong:eLong, northLat:nLat }};

    let params = new HttpParams().set("westLong" , '-97.783').set("southLat", '30.231').set( "eastLong" , '-97.740').set("northLat", '30.329');
    
    return this.http.get( 'api/find/places', { params : params}).subscribe(res=>console.log(res))

  }
}

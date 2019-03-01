import { Component, OnInit } from '@angular/core';
// import { Place } from '../../place'
import { GetReqPlaces } from '../../services/get-req-places.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor(private getPlaces: GetReqPlaces, private router: Router) { }

  westLong: number;
  eastLong: number;
  northLat: number;
  southLat: number;

  // log(x){console.log(x)}
  onSubmit(form){
    
  this.westLong = form.value.wLong; // -97.783
  this.eastLong = form.value.eLong; // 30.231
  this.northLat = form.value.nLat; // -97.740
  this.southLat = form.value.sLat; // 30.329
    console.log(this.getPlaces.getPlaces(this.westLong,this.southLat,this.eastLong,this.northLat))
  }
  ngOnInit() {
  }

}

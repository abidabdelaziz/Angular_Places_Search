import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../../place'

@Component({
  selector: 'app-query-display',
  templateUrl: './query-display.component.html',
  styleUrls: ['./query-display.component.css']
})
export class QueryDisplayComponent implements OnInit {

  constructor() { }

  @Input('wLong') wLong: number;
  @Input('sLat') sLat: number;
  @Input('eLong') eLong: number;
  @Input('nLat') nLat: number;

  ngOnInit() {
    
    // console.log(this.wLong,this.sLat,this.eLong,this.nLat)
  }


}

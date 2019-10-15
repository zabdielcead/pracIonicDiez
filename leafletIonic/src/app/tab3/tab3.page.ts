import { Component, OnInit } from '@angular/core';

import { Map, latLng, tileLayer, Layer, marker, geoJSON } from 'leaflet';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  map: Map;
  layer: Layer;
  jsonUSA: JSON;
  constructor() {}

  ngOnInit() {
    this.loadMapGeo();
  }

  loadMapGeo() {
    this.map =  new Map('map3').setView([19, -99], 5);

    tileLayer(`https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png`, {
       attribution: 'edupala.com'
     }).addTo(this.map);

    fetch('./assets/usas/mex.json').then(res => res.json())
     .then(json => {
       console.log(json);
       geoJSON(json).addTo(this.map);
      });
   }

}

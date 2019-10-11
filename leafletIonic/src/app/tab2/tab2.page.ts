import { Component, OnInit } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker, geoJSON } from 'leaflet';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  tokeMapbox = 'pk.eyJ1IjoiemFiZGllbGNlYWQiLCJhIjoiY2p6Yms3ZnJtMDBiaDNmcXNnYTZobGkyMiJ9.e6lr4n-fXyxnR3ndc8l17w';
  map: Map;
  layer: Layer;
  jsonUSA: JSON;
  // http://bl.ocks.org/Xatpy/raw/854297419bd7eb3421d0/      mapas
  constructor() {}

  ngOnInit() {
    this.loadMapGeo();
  }

  loadMapGeo() {
   this.map =  new Map('map').setView([37, -95], 2);


   tileLayer(`https://cartocdn_{s}.global.ssl.fastly.net/base-eco/{z}/{x}/{y}.png`, {
      attribution: 'edupala.com'
    }).addTo(this.map);

   fetch('./assets/usas/data.json').then(res => res.json())
    .then(json => {
      console.log(json);
      geoJSON(json).addTo(this.map);
     });
  }

  /*
  style(feature) {
    return {
      fillColor: this.getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  }

  getColor(d) {
    return d > 1000 ? '#800026' :
           d > 500  ? '#BD0026' :
           d > 200  ? '#E31A1C' :
           d > 100  ? '#FC4E2A' :
           d > 50   ? '#FD8D3C' :
           d > 20   ? '#FEB24C' :
           d > 10   ? '#FED976' :
                      '#FFEDA0';
  }
  */

}

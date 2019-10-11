import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
// import * as leaflet from 'leaflet';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

// https://edupala.com/how-to-add-leaflet-map-in-ionic-4/

export class Tab1Page  implements OnInit {
  geojsonUrl: any = {
    properties : [
      {
          city: 'Cambridge',
          state : 'MA',
          long: -71.10858,
          lat: 42.35963
      },
      {
          city: 'Cambridge',
          state: 'MA',
          long: -71.10869,
          lat: 42.359103,
      },
      {
          city: 'Boston',
          state: 'MA',
          long: -71.110061,
          lat: 42.360686,
      },
      {
          city: 'Cambridge',
          long: -71.110448,
          lat: 42.360642
      }
      ]
   };

   propertyList  = [];

  myLayer: any;

  guinea = 'https://raw.githubusercontent.com/johan/world.geo.json/master/countries/GIN.geo.json';

  @ViewChild('mapId', {static: true}) mapContainer: ElementRef;
  mapId: Map;

  ngOnInit() {
    this.loadmap();
  }


  loadmap() {
    // this.mapId = new Map('mapId').setView([42.35663, -71.1109], 18);
    this.mapId = new Map('mapId').setView([-10.65477, 8.977178], 5);

    tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
      attribution: 'edupala.com'
    }).addTo(this.mapId);

    fetch(this.guinea).then(  res => res.json())
      .then( json => {
        this.propertyList = json.features[0].geometry.coordinates[0];
        console.log('coor', this.propertyList);
        this.leafletMap();
      });



  }

  leafletMap() {
    let  conta = 0;
    for (const property of this.propertyList) {
      marker([property[0], property[1]]).addTo(this.mapId)
        .bindPopup(`${conta}`)
        .openPopup();
      conta++;
    }
  }
  /*
    this.mapId = new Map('mapId').setView([40.7277831, -74.0080852], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.mapId);
*/
    /*
    fetch(
      this.guinea
    ).then(
      res => res.json()
    ).then(
      data => leaflet.geoJSON(data).addTo(this.mapId)
    );
    */
    // this.mapId = leaflet.map('mapId');
    // leaflet.geoJSON(this.geojsonUrl).addTo(this.mapId);


    /*this.mapId = leaflet.map('mapId').fitWorld();
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.mapId);
    */




  // https://edupala.com/how-to-add-leaflet-map-in-ionic-4/
  // map: Map;
  /*
  geojsonUrl: any = {
    type: 'Feature',
    properties: {
      name: 'Coors Field',
      amenity: 'Baseball Stadium',
      popupContent: 'This is where the Rockies play!'
    },
    geometry: {
      type: 'Point',
      coordinates: [-104.99404, 39.75621]
    }
  };




  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {
    /*
    this.map = new Map('mapId').setView([40.7277831, -74.0080852], 13);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);


    marker([40.7277831, -74.0080852]).addTo(this.map)
      .bindPopup('Ionic 4 <br> Leaflet.')
      .openPopup();
    */

   /*
   this.geojsonUrl = 'https://babel.webreactiva.com/labs/arboles_singulares_en_espacios_naturales.geojson';
   fetch(
       this.geojsonUrl
    ).then(
      res => res.json()
    ).then (
     data => {
     const geojsonlayer =  this.map.geoJson(data, {
                  onEachFeature(features, layer) { // cuando se le da click en el marcador
                       // tslint:disable-next-line:no-string-literal
                       layer.bindPopup(features.properties['arbol_nombre']);
                       layer.setIcon(marker(features.geometry.coordinates));
                      }
        }).addTo(this.map);
     this.map.fitBounds(geojsonlayer.getBounds());
        }
      );


  }
  */

  /** Remove map when we have multiple map object */
  ionViewWillLeave() {
    // this.map.remove();
  }
}

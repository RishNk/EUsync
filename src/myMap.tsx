// import maplibregl = require('maplibre-gl');
import React, { useEffect, useRef } from 'react';
import './myMap.css';
import { Map } from 'maplibre-gl';
const loadData = (map, route)=>{

  if (route!=null){
    map.addSource("my-route", {
        "type":"geojson",
        "data": route // <= add data here!
      });
      map.addLayer({
        id: 'my-route-layer',
        type: 'line',
        source: 'my-route', // <= the same source id
        layout: {
          'line-cap': "round",
          'line-join': "round"
        },
        paint: {
          'line-color': "#6084eb",
          'line-width': 8
        }
      });
      // map.center = [(route.properties.waypoints[0].location[0]+route.properties.waypoints[1].location[0])/2,(route.properties.waypoints[0].location[1]+route.properties.waypoints[1].location[1])/2]
      console.log(map.center)
      console.log('added')
}
else{
  console.log('null')
}
}
const MyMap = ({
  mapIsReadyCallback, /* To be triggered when a map object is created */
  route
}) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const myAPIKey = '9b8eb3be66a243d8a04baf6f2dde2cbe';
    const mapStyle =
      'https://maps.geoapify.com/v1/styles/positron-red/style.json'
      // 'https://maps.geoapify.com/v1/styles/osm-carto/style.json';
    const initialState = {
      lng: 0,
      lat: 53,
      zoom: 5,
    };

    const map = new Map({
      container: mapContainer.current,
      style: `${mapStyle}?apiKey=${myAPIKey}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
    });
    setTimeout(() => loadData(map, route), 100);
    

    mapIsReadyCallback(map);
  }, [mapContainer.current, route]);

  return <div className="map-container" ref={mapContainer}></div>;
};

export default MyMap;
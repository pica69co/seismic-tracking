import React from 'react'
import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';

import Earthquakes from './Earthquakes/Earthquakes';
import Legend from './Legend/Legend';
import tectonicPlates from './PB2002_boundaries.json';
import { mapHeight, tectonicPlatesStyle, tileLayers } from './constants';

export default function Map() {
  return (
    <MapContainer center={[46.603354, 1.888334]} zoom={5} style={mapHeight}>
      <LayersControl position="topright">
        {tileLayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
        <LayersControl.Overlay name="Plaques tectoniques">
          <GeoJSON
            data={tectonicPlates}
            style={tectonicPlatesStyle}
          />
        </LayersControl.Overlay>
      </LayersControl>

      <Earthquakes />
      <ScaleControl />
      <Legend />
    </MapContainer>
  );
}
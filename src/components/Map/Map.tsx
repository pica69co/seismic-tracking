import {
  MapContainer,
  TileLayer,
  LayersControl,
  GeoJSON,
  ScaleControl
} from 'react-leaflet';

import Earthquakes from './Earthquakes';
import Legend from './Legend';
import tectonicPlates from './PB2002_boundaries.json';
import { mapHeight, tectonicPlatesStyle, tileLayers } from './constants';

export default function Map() {
  return (
    <MapContainer center={[4.624335, -74.063644]} zoom={4} style={mapHeight}>
      <LayersControl position="topright">
        {tileLayers.map(({ id, name, attribution, url, checked }) => (
          <LayersControl.BaseLayer key={id} name={name} checked={checked}>
            <TileLayer attribution={attribution} url={url} />
          </LayersControl.BaseLayer>
        ))}
        <LayersControl.Overlay name="Tectonic Plaques">
          <GeoJSON
            data={tectonicPlates as GeoJSON.GeoJsonObject}
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

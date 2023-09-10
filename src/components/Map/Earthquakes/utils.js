import { Layer } from 'leaflet';

const timeConverter = (time, offset) => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};

const onEachFeature = (feature, layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates }
  } = feature;

  const popupContent = `
    <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
    <b>Lieu</b>: ${place ?? 'Inconnue'} <br>
    <b>Temps (GMT+2)</b>: ${timeConverter(time, 2)} <br>
    <b>Latitude</b>: ${coordinates[1]} <br>
    <b>Longitude</b>: ${coordinates[0]} <br>
    <b>Profondeur</b>: ${coordinates[2]} km <br>
    <b>Magnitude</b>: ${mag} sur l'échelle de Richter <br>
    <b>Détails</b>: <a href=${url}>Cliquer ici pour voir plus de détails</a>
  `;

  layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

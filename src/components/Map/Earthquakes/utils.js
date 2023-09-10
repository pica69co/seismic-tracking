import { Layer } from 'leaflet';

const timeConverter = (time, offset) => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};


const onEachFeature = (feature, layer=Layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates }
  } = feature;

  const popupContent = `
    <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
    <b>Location</b>: ${place ?? 'Unknown'} <br>
    <b>Hour (GMT-5)</b>: ${timeConverter(time, 2)} <br>
    <b>Lat</b>: ${coordinates[1]} <br>
    <b>Long</b>: ${coordinates[0]} <br>
    <b>Depth</b>: ${coordinates[2]} km <br>
    <b>Magnitude</b>: ${mag} On Richter Scale <br>
    <b>Details</b>: <a href=${url}>Click here + details</a>
  `;

  layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

import { Layer } from 'leaflet';
import { FeatureProps } from './models';

const timeConverter = (time: number, offset: number): string => {
  const d = new Date(time);
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * offset);
  return nd.toLocaleString();
};
  // console.log(timeConverter(Date.now(), -5));



const onEachFeature = (feature: FeatureProps, layer: Layer) => {
  const {
    properties: { title, place, time, mag, url },
    geometry: { coordinates }
  } = feature;

  const popupContent = `
    <h3 style="font-size: 1.17em; font-weight: bold">${title}</h3>
    <b>Location</b>: ${place ?? 'Unknown'} <br>
    <b>Time (GMT-5)</b>: ${timeConverter(time, -5)} <br>
    <b>Lat</b>: ${coordinates[1]} <br>
    <b>Long</b>: ${coordinates[0]} <br>
    <b>Depth</b>: ${coordinates[2]} km <br>
    <b>Magnitude</b>: ${mag} On Richter Scale <br>
    <b>Details</b>: <a href=${url}>Click Here for More Details</a>
  `;

  layer.bindPopup(popupContent);
};

export { timeConverter, onEachFeature };

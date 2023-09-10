import { useEffect, useState } from 'react';
import L, { LatLng, GeoJSON } from 'leaflet';
import { useMap } from 'react-leaflet';
import { useQuery } from '@tanstack/react-query';

import { AxiosError } from 'axios';
import Modal from 'react-modal';
import Spinner from '../../Spinner/Spinner';
import { onEachFeature } from './utils';
import { geojsonMarkerOptions } from '../utils';
import { getEarthquakes } from '../../../api/earthquakes';
import  useStore  from '../../../hooks/useStore';

let geojson = GeoJSON;

export default function Earthquakes() {
  const startTime = useStore((state) => state.startTime);
  const endTime = useStore((state) => state.endTime);
  const [error, setError] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const { data: earthquakes, isLoading } = useQuery(
    ['earthquakes', startTime, endTime],
    () => getEarthquakes(startTime, endTime),
    {
      onError: (dataError) => {
        if (dataError.response && dataError.response.status === 400) {
          setError(dataError);
          setModalIsOpen(true);
        }
      }
    }
  );

  const map = useMap();
  useEffect(() => {
    if (!earthquakes) return;

    if (map && geojson && map.hasLayer(geojson)) map.removeLayer(geojson);

    geojson = L.geoJSON(earthquakes.features, {
      onEachFeature,
      pointToLayer: (feature, latlng) => {
        const magnitude = feature.properties.mag;
        return L.circleMarker(latlng, geojsonMarkerOptions(magnitude));
      }
    });

    if (map) geojson.addTo(map);
  }, [earthquakes, map]);

  if (isLoading) return <Spinner />;

  if (error && error.response && error.response.status === 400) {
    return (
<Modal
  isOpen={modalIsOpen}
  onRequestClose={closeModal}
  contentLabel="Problème avec la période"
  style={{
    overlay: {
      zIndex: 1000
    },
    content: {
      zIndex: 1001,
      width: '800px',
      height: '200px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }}
>
  <div>
    <p>Veuillez réduire la période sélectionnée (le nombre d&apos;évènements sismiques doit être inférieur à 20000).</p>
    <button type="button" onClick={closeModal}>Fermer</button>
  </div>
</Modal>

    );
  }

  return null;
}

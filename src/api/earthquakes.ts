import { AxiosError } from 'axios';
import httpService from './httpService';

const getEarthquakes = async (starttime: string, endtime: string) => {
  try {
    const response = await httpService.get(
      `/fdsnws/event/1/query?format=geojson&starttime=${starttime}&endtime=${endtime}`
    );
    const { data } = response;
    return data;
  } catch (error) {
    if (error instanceof Error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 400) {
        throw axiosError;
      } else {
        console.log('There was an error while getting the earthquakes', error);
      }
    } else {
      console.log('Unknown error occurred while getting the earthquakes');
    }
    return false;
  }
};

export { getEarthquakes };

import {useState, useEffect} from 'react';
import Geolocation from '@react-native-community/geolocation';

interface GeolocationData {
  latitude: number;
  longitude: number;
}

export const useGeolocation = (
  enableGPS: boolean,
): [string, GeolocationData] => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState<GeolocationData>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const watchId = Geolocation.watchPosition(
      (pos) => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => setError(e.message),
      {enableHighAccuracy: enableGPS},
    );
    return () => Geolocation.clearWatch(watchId);
  }, []);

  return [error, position];
};

import React, {useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {Button, View, Text, StyleSheet, CheckBox} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type CurrentPositionProps = {
  useGPS: boolean;
};

const CurrentPosition = ({useGPS}: CurrentPositionProps) => {
  const [error, setError] = useState('');
  const [position, setPosition] = useState({
    latitude: 0,
    longitude: 0,
  });

  const getPosition = () => {
    Geolocation.getCurrentPosition(
      (pos) => {
        setError('');
        setPosition({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (e) => setError(e.message),
      {enableHighAccuracy: useGPS},
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Current Position using ${
        useGPS ? 'GPS' : 'Network'
      }`}</Text>

      <View style={styles.content}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <Text>Latitude: {position.latitude}</Text>
            <Text>Longitude: {position.longitude}</Text>
            <Button title="Update Current Position" onPress={getPosition} />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.black,
  },
  title: {
    color: Colors.black,
    fontSize: 20,
    fontWeight: '500',
  },
  checkboxContainer: {
    flexDirection: 'row',
  },
  label: {
    margin: 8,
  },
});

export default CurrentPosition;

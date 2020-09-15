import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGeolocation} from './useGeolocation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type WatchedPositionProps = {
  useGPS: boolean;
};

const WatchedPosition = ({useGPS}: WatchedPositionProps) => {
  const [error, position] = useGeolocation(useGPS);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`Watched Position using ${
        useGPS ? 'GPS' : 'Network'
      }`}</Text>

      <View style={styles.content}>
        {error ? (
          <Text>{error}</Text>
        ) : (
          <>
            <Text>Latitude: {position.latitude}</Text>
            <Text>Longitude: {position.longitude}</Text>
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
});

export default WatchedPosition;

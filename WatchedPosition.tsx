import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useGeolocation} from './useGeolocation';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const WatchedPosition = () => {
  const [error, position] = useGeolocation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Watched Position</Text>

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
    fontSize: 24,
    fontWeight: '600',
  },
});

export default WatchedPosition;
